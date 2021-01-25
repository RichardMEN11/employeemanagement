import { AbstractEntity } from 'src/common/abstract.entity';
import { Column, Entity } from 'typeorm';
import { AddEmployeeDto } from './dto/AddEmployeeDto';

@Entity({ name: 'employees' })
export class EmployeeEntitiy extends AbstractEntity<AddEmployeeDto> {
  @Column({ nullable: true })
  company: string;

  @Column({ unique: true, nullable: true })
  email: string;

  @Column({ nullable: true })
  firstname: string;

  @Column({ nullable: true })
  lastname: string;

  @Column('simple-array')
  skills: string[];

  dtoClass = AddEmployeeDto;
}
