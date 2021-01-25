import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
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

  @Get(':id')
  async getEmployeeById(@Param('id') id: string): Promise<AddEmployeeDto> {
    return this.employeeService.getEmployeeById(id);
  }

  @Delete(':id')
  async deleteEmployeeById(@Param('id') id: string): Promise<void> {
    return this.employeeService.deleteEmployeeById(id);
  }

  @Put(':id')
  async updateEmployeeById(
    @Param('id') id: string,
    @Body() addEmployeeDto: AddEmployeeDto,
  ): Promise<number> {
    return this.employeeService.updateEmployeeById(id, addEmployeeDto);
  }
}
