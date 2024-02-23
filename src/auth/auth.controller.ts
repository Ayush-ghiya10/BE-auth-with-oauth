import { Controller, Get, Req, SetMetadata, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { HttpUser } from 'src/decorators/http-user.decorator';
import { GoogleLoginUserDto } from './dto/google-login.dto';
import { HttpGoogleOAuthGuard } from 'src/guards';
import { Request } from 'express';

@SetMetadata('google-login', true)
@UseGuards(HttpGoogleOAuthGuard)
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get()
  async googleAuth(@Req() _req: Request) {}

  @Get('google-redirect')
  googleAuthRedirect(@HttpUser() user: GoogleLoginUserDto) {
    console.log(user);
    return this.authService.googleLogin(user);
  }
}
