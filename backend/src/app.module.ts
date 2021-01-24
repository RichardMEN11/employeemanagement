import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { EmployeesController } from './employees/employees.controller';
import { EmployeesService } from './employees/employees.service';
import { EmployeesModule } from './employees/employees.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST', 'localhost'),
        port: configService.get<number>('POSTGRES_PORT', 5432),
        username: configService.get('POSTGRES_USER', 'admin'),
        password: configService.get('POSTGRES_PASSWORD', 'admin'),
        database: configService.get('POSTGRES_DB', 'nestjs'),
        autoLoadEntities: true,
        migrationsRun: true,
        synchronize: true,
      }),
    }),
    UserModule,
    AuthModule,
    EmployeesModule,
  ],
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class AppModule {}
