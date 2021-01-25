import { IsEmail, IsString } from 'class-validator';
import { AbstractDto } from 'src/common/dto/abstractDto';

export class AddEmployeeDto extends AbstractDto {
  @IsString()
  readonly firstname: string;

  @IsString()
  readonly lastname: string;

  @IsString()
  readonly company: string;

  @IsString()
  @IsEmail()
  readonly email: string;

  readonly skills: Array<string>;
}
