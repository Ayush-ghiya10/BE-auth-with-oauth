import { Body, Controller, Get, Post, Query, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { AddAdminUser } from './dto/add-admin-user.dto';
import { Request } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findByEmail(@Query('email') email: string) {
    return this.userService.findByEmail(email);
  }

  @Get('admin/list')
  findAllAdmin() {
    return this.userService.findAllSuperAdmin();
  }

  @Post('admin/add')
  addSuperAdmin(@Body() addAdminDto: AddAdminUser, @Req() req: Request) {
    return this.userService.addSuperAdmin(addAdminDto, req.ip);
  }

  @Post('verifytoken')
  verifyToken(@Body('token') token: string) {
    console.log(token);
    return this.userService.verifyToken(token);
  }
}
