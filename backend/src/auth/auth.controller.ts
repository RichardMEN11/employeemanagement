import { Controller, Post, Body } from '@nestjs/common';

import { AuthService } from './auth.service';
import { UserLoginDto } from './dto/UserLoginDto';
import { UserRegisterDto } from './dto/UserRegisterDto';

@Controller('auth')
export class AuthController {
  constructor(public readonly authService: AuthService) {}

  @Post('register')
  async register(
    @Body() registrationData: UserRegisterDto,
  ): Promise<UserRegisterDto> {
    return this.authService.register(registrationData);
  }

  @Post('login')
  async login(
    @Body() userLoginData: UserLoginDto,
  ): Promise<{ email: string; accessToken: string }> {
    console.log(userLoginData);
    const user = await this.authService.authenticateUser(userLoginData);
    return user;
  }
}
