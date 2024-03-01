import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { AddAdminUser } from './dto/add-admin-user.dto';
import { Public } from 'src/decorators/public.decorator';
import { CustomRequest } from 'types/interfaces/customRequest';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Public()
  @Post()
  findByEmail(
    @Body('access_token') access_token: string,
    @Req() req: CustomRequest,
  ) {
    return this.userService.findByEmailv2(access_token, req);
  }

  @Get('admin/list')
  findAllAdmin() {
    return this.userService.findAllSuperAdmin();
  }

  @Post('admin/add')
  addSuperAdmin(@Body() addAdminDto: AddAdminUser, @Req() req: CustomRequest) {
    return this.userService.addSuperAdmin(addAdminDto, req);
  }

  @Post('verifytoken')
  verifyToken(@Body('token') token: string) {
    return this.userService.verifyToken(token);
  }

  @Post('delete')
  deleteUser(@Body('userId') userId: number, @Req() req: CustomRequest) {
    return this.userService.deleteUser(userId, req);
  }
}
