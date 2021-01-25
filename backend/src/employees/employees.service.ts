import { Injectable, NotFoundException } from '@nestjs/common';
import { AddEmployeeDto } from './dto/AddEmployeeDto';
import { EmployeeRepository } from './employee.repository';

@Injectable()
export class EmployeesService {
  constructor(public readonly employeeRepository: EmployeeRepository) {}

  async addEmployee(addEmployeeDto: AddEmployeeDto): Promise<AddEmployeeDto> {
    const employee = this.employeeRepository.create(addEmployeeDto);
    await this.employeeRepository.save(employee);
    return employee;
  }

  async getAllEmployeesFromACompany(
    company: string,
  ): Promise<AddEmployeeDto[]> {
    // TODO: Use relations
    const employees = await this.employeeRepository.find({
      where: { company },
    });

    if (!employees) {
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
