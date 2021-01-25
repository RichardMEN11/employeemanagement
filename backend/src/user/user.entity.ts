import { Column, Entity } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @Column({ nullable: true })
  company: string;

  @Column({ unique: true, nullable: true })
  email: string;

  @Column({ nullable: true })
  password: string;
}
