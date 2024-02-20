import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TblUsers } from 'output/entities/TblUsers';

@Module({
  imports: [TypeOrmModule.forFeature([TblUsers])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
