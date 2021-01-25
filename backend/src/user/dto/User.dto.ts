import { AbstractDto } from 'src/common/dto/AbstractDto';
import { UserEntity } from '../user.entity';

export class UserDto extends AbstractDto {
  company: string;

  email: string;

  password: string;
}
