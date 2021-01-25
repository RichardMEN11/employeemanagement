import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';
import { EmployeeEntitiy } from './employee.entity';

@EntityRepository(EmployeeEntitiy)
export class EmployeeRepository extends Repository<EmployeeEntitiy> {}
