import { Injectable } from '@nestjs/common';
import { UserRegisterDto } from '../auth/dto/UserRegisterDto';
import { UserRepository } from './user.repository';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(public readonly userRepository: UserRepository) {}

  async createUser(userRegisterDto: UserRegisterDto) {
    const user = this.userRepository.create(userRegisterDto);
    await this.userRepository.save(user);
    return user;
  }

  async findOneByMail(email: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({ where: { email } });
    return user;
  }
}
