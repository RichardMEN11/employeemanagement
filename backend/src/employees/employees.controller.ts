import { Body, Controller, Post, Get } from '@nestjs/common';
import { AddEmployeeDto } from './dto/AddEmployeeDto';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {
  constructor(public readonly employeeService: EmployeesService) {}

  @Get()
  async getAllEmployees(@Body() { company }): Promise<AddEmployeeDto[]> {
    return this.employeeService.getAllEmployeesFromACompany(company);
  }

  @Post()
  async addEmployee(
    @Body() addEmployeeDto: AddEmployeeDto,
  ): Promise<AddEmployeeDto> {
    return this.employeeService.addEmployee(addEmployeeDto);
  }
}
