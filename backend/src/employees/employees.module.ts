import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { EmployeeRepository } from './employee.repository';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
@Module({
  imports: [TypeOrmModule.forFeature([EmployeeRepository]), AuthModule],
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class EmployeesModule {}
