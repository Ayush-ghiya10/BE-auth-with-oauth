import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class AddAdminUser {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsNumber()
  @IsNotEmpty()
  userId: number;
}
