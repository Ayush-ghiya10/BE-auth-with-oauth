import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TblUsers } from 'output/entities/TblUsers';
import { TblClient } from 'output/entities/TblClient';
import { TblUsersDeleted } from 'output/entities/TblUsersDeleted';

@Module({
  imports: [TypeOrmModule.forFeature([TblUsers, TblClient, TblUsersDeleted])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
