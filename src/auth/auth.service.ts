import { Injectable } from '@nestjs/common';
import { GoogleLoginUserDto } from './dto/google-login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  async googleLogin(user: GoogleLoginUserDto) {
    return user;
  }
}
