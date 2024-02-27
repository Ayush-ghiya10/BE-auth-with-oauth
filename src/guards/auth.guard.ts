import { DataSource } from 'typeorm';

import {
  CanActivate,
  ExecutionContext,
  HttpException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';

import { IS_PUBLIC_KEY } from '../decorators/public.decorator';
import { CustomRequest } from 'src/interfaces/customRequest';
import { TblUsers } from 'output/entities/TblUsers';
import { JwtLoginPayload } from 'src/interfaces/jwtLoginPayload';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private jwtService: JwtService, // @InjectRepository(User) private userRepository: Repository<User>,
    private dataSource: DataSource,
  ) {}
  async canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) return true;

    const req: CustomRequest = context
      .switchToHttp()
      .getRequest<CustomRequest>();

    const token = this.extractTokenFromRequest(req);
    if (!token)
      throw new HttpException(
        'Authentication required, please provide valid credentials',
        440,
      );

    try {
      const payload = this.jwtService.verify<JwtLoginPayload>(token);
      const user = await this.dataSource.getRepository(TblUsers).findOne({
        where: { UserID: payload.userId },
      });
      if (!user) throw new HttpException('User does not exist', 404);
      req['user'] = payload;
    } catch (error) {
      throw new HttpException(
        'Authentication required, please provide valid credentials',
        440,
      );
    }
    return true;
  }

  extractTokenFromRequest(req: CustomRequest): string | undefined {
    const [type, token] = req.get('Authorization')?.split(' ') ?? [];
    return type?.toLowerCase() === 'bearer' ? token : undefined;
  }
}
