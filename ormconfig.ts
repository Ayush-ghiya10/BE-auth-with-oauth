import { config } from 'dotenv';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { TblUsers } from 'output/entities/TblUsers';
import { TblClient } from 'output/entities/TblClient';
import { TblUsersDeleted } from 'output/entities/TblUsersDeleted';
config();
const ormConfig: TypeOrmModuleOptions = {
  type: 'mssql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  options: {
    encrypt: false, // MSSQL-specific option
  },
  synchronize: false,
  entities: [TblUsers, TblClient, TblUsersDeleted],
  logging: true,
};
export default ormConfig;
