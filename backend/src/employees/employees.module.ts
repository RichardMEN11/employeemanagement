import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { UserRepository } from 'src/user/user.repository';
import { UserService } from 'src/user/user.service';
import { EmployeeRepository } from './employee.repository';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
@Module({
  imports: [
    TypeOrmModule.forFeature([EmployeeRepository]),
    AuthModule,
    TypeOrmModule.forFeature([UserRepository]),
  ],
  controllers: [EmployeesController],
  providers: [EmployeesService, UserService],
})
export class EmployeesModule {}
