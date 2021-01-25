import { AbstractEntity } from 'src/common/abstract.entity';
import { Column, Entity } from 'typeorm';
import { UserDto } from './dto/User.dto';

@Entity({ name: 'users' })
export class UserEntity extends AbstractEntity<UserDto> {
  @Column({ nullable: true })
  company: string;

  @Column({ unique: true, nullable: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  dtoClass = UserDto;
}
