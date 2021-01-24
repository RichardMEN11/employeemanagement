import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { UserRegisterDto } from './dto/UserRegisterDto';

@Controller('auth')
export class AuthController {
  constructor(
    public readonly authService: AuthService,
    public readonly userService: UserService,
  ) {}

  @Post('register')
  async register(@Body() registrationData: UserRegisterDto) {
    return this.userService.createUser(registrationData);
  }
}
