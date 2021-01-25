import {
  Injectable,
  HttpException,
  HttpStatus,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { UserRegisterDto } from './dto/UserRegisterDto';
import { UserLoginDto } from './dto/UserLoginDto';
import { UserNotFoundException } from 'src/exceptions/user-not-found.exception';
import { JwtPayload } from 'src/interfaces/JwtPayload.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  public async register(registrationData: UserRegisterDto) {
    const hashedPassword = await bcrypt.hash(registrationData.password, 10);
    try {
      const createdUser = await this.userService.createUser({
        ...registrationData,
        password: hashedPassword,
      });
      createdUser.password = undefined;
      return createdUser;
    } catch (error) {
      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  public async authenticateUser({
    email,
    password,
  }: UserLoginDto): Promise<{ email: string; accessToken: string }> {
    const user = await this.userService.findOneByMail(email);

    if (!user) {
      throw new UserNotFoundException();
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException();
    }

    const payload: JwtPayload = {
      email,
    };

    const accessToken = await this.jwtService.sign(payload);

    return { email, accessToken };
  }
}
