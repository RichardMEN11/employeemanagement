import { Injectable } from '@nestjs/common';
import { UserRegisterDto } from '../auth/dto/UserRegisterDto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(public readonly userRepository: UserRepository) {}

  async createUser(userRegisterDto: UserRegisterDto) {
    const user = this.userRepository.create(userRegisterDto);
    return user;
  }
}
