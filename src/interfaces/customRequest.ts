import { Request } from 'express';
export interface CustomRequest extends Request {
  user?: {
    userId: number;
    userGUID: string;
    accessLevel: number;
    userEmail: string;
    image: string;
  };
}
