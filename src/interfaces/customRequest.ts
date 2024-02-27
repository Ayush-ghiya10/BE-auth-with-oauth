import { Request } from 'express';
import { JwtLoginPayload } from './jwtLoginPayload';
export interface CustomRequest extends Request {
  user?: JwtLoginPayload;
}
