import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AddEmployeeDto } from './dto/AddEmployeeDto';
import { EmployeesService } from './employees.service';

@Controller('employees')
@UseGuards(AuthGuard())
export class EmployeesController {
  constructor(public readonly employeeService: EmployeesService) {}

  @Get(':id')
  async getAllEmployees(@Param('id') id: string): Promise<AddEmployeeDto[]> {
    return this.employeeService.getAllEmployeesFromACompany(id);
  }

  @Post()
  async addEmployee(
    @Body() addEmployeeDto: AddEmployeeDto,
  ): Promise<AddEmployeeDto> {
    return this.employeeService.addEmployee(addEmployeeDto);
  }

  @Get('/one/:id')
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
