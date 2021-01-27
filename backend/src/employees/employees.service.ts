import { Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { AddEmployeeDto } from './dto/AddEmployeeDto';
import { EmployeeRepository } from './employee.repository';

@Injectable()
export class EmployeesService {
  constructor(
    public readonly employeeRepository: EmployeeRepository,
    private readonly userService: UserService,
  ) {}

  async addEmployee(addEmployeeDto: AddEmployeeDto): Promise<AddEmployeeDto> {
    const employee = this.employeeRepository.create(addEmployeeDto);
    await this.employeeRepository.save(employee);
    return employee;
  }

  async getAllEmployeesFromACompany(id: string): Promise<AddEmployeeDto[]> {
    const user = await this.userService.findOneById(id);
    const employees = await this.employeeRepository.find({
      where: { company: user.company },
    });

    if (!user || !employees) {
      throw new NotFoundException();
    }
    return employees;
  }

  async getEmployeeById(id: string): Promise<AddEmployeeDto> {
    const employee = await this.employeeRepository.findOne({
      where: { id },
    });

    if (!employee) {
      throw new NotFoundException();
    }
    return employee;
  }

  async deleteEmployeeById(id: string): Promise<void> {
    const result = await this.employeeRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Blog Post with id ${id} not found`);
    }
  }

  async updateEmployeeById(
    id: string,
    addEmployeeDto: AddEmployeeDto,
  ): Promise<number> {
    const employee = await this.employeeRepository.update(id, addEmployeeDto);
    if (!employee) {
      throw new NotFoundException();
    }

    const { affected } = employee;
    return affected;
  }
}
