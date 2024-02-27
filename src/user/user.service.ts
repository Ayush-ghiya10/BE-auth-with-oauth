import {
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TblUsers } from 'output/entities/TblUsers';
import { Repository } from 'typeorm';
import { AddAdminUser } from './dto/add-admin-user.dto';
import { TblClient } from 'output/entities/TblClient';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { TblUsersDeleted } from 'output/entities/TblUsersDeleted';
import { CustomRequest } from 'src/interfaces/customRequest';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(TblUsers) private userRepo: Repository<TblUsers>,
    @InjectRepository(TblClient) private clientRepo: Repository<TblClient>,
    @InjectRepository(TblUsersDeleted)
    private deletedUserRepo: Repository<TblUsersDeleted>,
    private readonly jwtService: JwtService,
  ) {}

  async deleteUser(userId: number, req: CustomRequest) {
    const existUser = await this.userRepo.findOne({
      where: { UserID: userId },
    });
    if (!existUser) throw new HttpException('User does not exist', 404);
    const newDeletedUser: Partial<TblUsersDeleted> = {
      UserID: existUser.UserID,
      Username: existUser.Username,
      Password: existUser.Password,
      ClientID: existUser.ClientID,
      FirstName: existUser.FirstName,
      LastName: existUser.LastName,
      Email: existUser.Email,
      ProjectID: existUser.ProjectID,
      AccessLevel: existUser.AccessLevel,
      RoleID: existUser.RoleID,
      VideoID: existUser.VideoID,
      AgencyID: existUser.AgencyID,
      UserTypeID: existUser.UserTypeID,
      MsgSent: existUser.MsgSent,
      Confirmed: existUser.Confirmed,
      Phone1: existUser.Phone1,
      Phone2: existUser.Phone2,
      LocationID: existUser.LocationID,
      TimeDate: new Date(),
      IPAddress: req.ip,
      DeletedBy: String(req.user.userId),
      PasswordHash: existUser.PasswordHash,
      IsPasswordMigrated: existUser.IsPasswordMigrated,
    };
    const deleteUserResponse = await this.deletedUserRepo.save(newDeletedUser);
    return {
      success: true,
      res: await this.userRepo.remove(existUser),
      deleteUserResponse,
    };
  }

  async findByEmail(email: string) {
    const existUser = await this.userRepo.findOne({
      where: { Email: email },
      select: { Email: true, AccessLevel: true, UserID: true, UserGUID: true },
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
    return { success: true, payload };
  }

  async findAllSuperAdmin() {
    const existSuperAdmin = await this.userRepo.find({
      where: { AccessLevel: 0 },
      order: { LastUpdated: 'DESC' },
    });
    return existSuperAdmin;
  }

  async addSuperAdmin(addAdminDto: AddAdminUser, req: CustomRequest) {
    console.log({ addAdminDto });
    const existUser = await this.userRepo.findOne({
      where: { Email: addAdminDto.email },
    });
    if (existUser) return { message: 'User already exist' };

    const clientId = (
      await this.clientRepo.findOne({ where: { company: 'Cast It Admin' } })
    ).clientId;

    const randString = generateRandomString(10);
    const passHash = bcrypt.hashSync(randString, 10);
    const newUser = {
      Username: addAdminDto.email,
      MD5Hash: '',
      FirstName: addAdminDto.firstName,
      LastName: addAdminDto.lastName,
      Email: addAdminDto.email,
      AssistantEmail: '',
      AccessLevel: 0,
      DateTime: new Date(),
      LastUpdated: new Date(),
      ClientID: clientId,
      IsPasswordMigrated: true,
      PasswordHash: passHash,
      CreatedBy: req.user.userId,
      IpAddress: req.ip,
    } as TblUsers;
    const response = await this.userRepo.save(newUser);
    return response;
  }

  async verifyToken(token: string) {
    const ticket = await this.jwtService.decode(token);
    // log the ticket payload in the console to see what we have
    console.log(ticket);
    return 'test';
  }
}
function generateRandomString(length) {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
