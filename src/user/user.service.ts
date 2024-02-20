import {
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TblUsers } from 'output/entities/TblUsers';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(TblUsers) private userRepo: Repository<TblUsers>,
    private jwtService: JwtService,
  ) {}
  async findByEmail(email: string) {
    const existUser = await this.userRepo.findOne({
      where: { Email: email },
      select: { Email: true, AccessLevel: true },
    });
    if (!existUser) throw new HttpException('User does not exist', 404);
    console.log(existUser);
    if (existUser.AccessLevel !== 0) {
      throw new UnauthorizedException('Access denied');
    }
    const payload = {
      userId: existUser.UserID,
      userGUID: existUser.UserGUID,
      accessLevel: existUser.AccessLevel,
      userEmail: existUser.Email,
    };
    console.log(payload);
    const token = this.jwtService.sign(payload, {
      expiresIn: Number.parseInt(process.env.JWT_TOKEN_EXPIRY || '2') * 60,
    });
    return { success: true, payload };
  }

  async findAllSuperAdmin() {
    const existSuperAdmin = await this.userRepo.find({
      where: { AccessLevel: 0 },
    });
    return existSuperAdmin;
  }
}
