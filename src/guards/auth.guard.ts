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
import { JwtLoginPayload } from 'src/interfaces/jwtLoginPayload';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private jwtService: JwtService,
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
      console.log('payload', payload);
      let sessionData;
      await req.sessionStore.get(payload.sessionId, (err, sess) => {
        if (err) throw err;
        if (sess) {
          sessionData = sess['data'];
        }
      });
      if (!sessionData) throw new HttpException('User does not exist', 404);
      req['user'] = sessionData;
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
