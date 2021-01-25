import { Injectable } from '@nestjs/common';
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
    return employees;
  }
}
