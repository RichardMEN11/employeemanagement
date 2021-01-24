import { Column, Entity } from 'typeorm';

import { AbstractEntity } from '../common/abtract.entity';

@Entity({ name: 'users' })
export class UserEntity {
  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({ nullable: true })
  company: string;

  @Column({ unique: true, nullable: true })
  email: string;

  @Column({ nullable: true })
  password: string;
}
