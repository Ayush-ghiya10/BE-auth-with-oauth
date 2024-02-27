import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('tblUsersDeleted', { schema: 'dbo' })
export class TblUsersDeleted {
  @PrimaryColumn({ type: 'int', name: 'UserID' })
  UserID: number;

  @Column('nvarchar', { name: 'Username', nullable: true, length: 50 })
  Username: string | null;

  @Column('nvarchar', { name: 'Password', nullable: true, length: 50 })
  Password: string | null;

  @Column('int', { name: 'ClientID', nullable: true })
  ClientID: number | null;

  @Column('varchar', { name: 'FirstName', nullable: true, length: 50 })
  FirstName: string | null;

  @Column('varchar', { name: 'LastName', nullable: true, length: 50 })
  LastName: string | null;

  @Column('varchar', { name: 'Email', nullable: true, length: 50 })
  Email: string | null;

  @Column('int', { name: 'ProjectID', nullable: true })
  ProjectID: number | null;

  @Column('int', { name: 'AccessLevel', nullable: true })
  AccessLevel: number | null;

  @Column('int', { name: 'RoleID', nullable: true })
  RoleID: number | null;

  @Column('int', { name: 'VideoID', nullable: true })
  VideoID: number | null;

  @Column('int', { name: 'AgencyID', nullable: true })
  AgencyID: number | null;

  @Column('int', { name: 'UserTypeID', nullable: true })
  UserTypeID: number | null;

  @Column('varchar', { name: 'MsgSent', nullable: true, length: 10 })
  MsgSent: string | null;

  @Column('varchar', { name: 'Confirmed', nullable: true, length: 10 })
  Confirmed: string | null;

  @Column('varchar', { name: 'Phone1', nullable: true, length: 25 })
  Phone1: string | null;

  @Column('varchar', { name: 'Phone2', nullable: true, length: 25 })
  Phone2: string | null;

  @Column('int', { name: 'LocationID', nullable: true })
  LocationID: number | null;

  @Column('datetime', { name: 'TimeDate', nullable: true })
  TimeDate: Date | null;

  @Column('uniqueidentifier', { name: 'UserGUID', nullable: true })
  UserGUID: string | null;

  @Column('varchar', {
    name: 'ScriptPaypalProfileID',
    nullable: true,
    length: 50,
  })
  ScriptPaypalProfileID: string | null;

  @Column('varchar', { name: 'MD5Hash', nullable: true, length: 34 })
  MD5Hash: string | null;

  @Column('datetime', { name: 'FeedbackNDADate', nullable: true })
  FeedbackNDADate: Date | null;

  @Column('varchar', { name: 'PasswordHash', nullable: true, length: 100 })
  PasswordHash: string | null;

  @Column('bit', {
    name: 'IsPasswordMigrated',
    nullable: true,
    default: () => '(0)',
  })
  IsPasswordMigrated: boolean | null;

  @Column('varchar', { name: 'DeletedBy', nullable: true, length: 100 })
  DeletedBy: string | null;

  @Column('varchar', { name: 'IPAddress', nullable: true, length: 100 })
  IPAddress: string | null;
}
