import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tblUsers')
export class TblUsers {
  @PrimaryGeneratedColumn({ type: 'int', name: 'UserID' })
  UserID: number;

  @Column('nvarchar', { name: 'Username', nullable: true, length: 50 })
  Username: string | null;

  @Column('nvarchar', { name: 'Password', nullable: true, length: 50 })
  Password: string | null;

  @Column('int', { name: 'ClientID', nullable: true })
  ClientID: number | null;

  @Column('varchar', { name: 'FirstName', nullable: true, length: 50 })
  FirstName: string | null;

  @Column('varchar', {
    name: 'LastName',
    nullable: true,
    length: 50,
    default: () => "''",
  })
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

  @Column('smallint', { name: 'FORUM_LEVEL', nullable: true })
  FORUM_LEVEL: number | null;

  @Column('datetime', { name: 'Email_Confirmed', nullable: true })
  Email_Confirmed: Date | null;

  @Column('datetime', {
    name: 'DateTime',
    nullable: true,
    default: () => 'getdate()',
  })
  DateTime: Date | null;

  @Column('datetime', { name: 'LastUpdated', nullable: true })
  LastUpdated: Date | null;

  @Column('uniqueidentifier', {
    name: 'UserGUID',
    nullable: true,
    default: () => 'newid()',
  })
  UserGUID: string | null;

  @Column('varchar', { name: 'AssistantEmail', nullable: true, length: 100 })
  AssistantEmail: string | null;

  @Column('int', {
    name: 'SubmissionEmails',
    nullable: true,
    default: () => '(0)',
  })
  SubmissionEmails: number | null;

  @Column('int', {
    name: 'MessageAccess',
    nullable: true,
    default: () => '(0)',
  })
  MessageAccess: number | null;

  @Column('int', {
    name: 'ScriptAccess',
    nullable: true,
    default: () => 'NULL',
  })
  ScriptAccess: number | null;

  @Column('int', { name: 'ScriptiPad', nullable: true, default: () => '(0)' })
  ScriptiPad: number | null;

  @Column('int', { name: 'HasAsst', nullable: true, default: () => '(0)' })
  HasAsst: number | null;

  @Column('int', {
    name: 'ScriptIpadForceReload',
    nullable: true,
    default: () => '(1)',
  })
  ScriptIpadForceReload: number | null;

  @Column('datetime', { name: 'ScriptIpadLastLogin', nullable: true })
  ScriptIpadLastLogin: Date | null;

  @Column('varchar', { name: 'TempPassword', nullable: true, length: 250 })
  TempPassword: string | null;

  @Column('int', {
    name: 'ScriptAccountTypeID',
    nullable: true,
    default: () => '(0)',
  })
  ScriptAccountTypeID: number | null;

  @Column('int', { name: 'ScriptAdminUserAcctID', nullable: true })
  ScriptAdminUserAcctID: number | null;

  @Column('int', {
    name: 'InboxNotifications',
    nullable: true,
    default: () => '(1)',
  })
  InboxNotifications: number | null;

  @Column('varbinary', { name: 'EncPassword', nullable: true })
  EncPassword: Buffer | null;

  @Column('varchar', {
    name: 'ScriptPaypalProfileID',
    nullable: true,
    length: 50,
  })
  ScriptPaypalProfileID: string | null;

  @Column('int', {
    name: 'ScriptPaypalSubscription',
    nullable: true,
    default: () => '(0)',
  })
  ScriptPaypalSubscription: number | null;

  @Column('datetime', { name: 'ScriptPaypalStartdate', nullable: true })
  ScriptPaypalStartdate: Date | null;

  @Column('int', {
    name: 'ScriptPaypalActive',
    nullable: true,
    default: () => '(0)',
  })
  ScriptPaypalActive: number | null;

  @Column('int', { name: 'TextMessageCode', nullable: true })
  TextMessageCode: number | null;

  @Column('uniqueidentifier', { name: 'RememberMe', nullable: true })
  RememberMe: string | null;

  @Column('int', { name: 'Notify', nullable: true, default: () => '(1)' })
  Notify: number | null;

  @Column('varchar', { name: 'MD5Hash', nullable: true, length: 34 })
  MD5Hash: string | null;

  @Column('varchar', { name: 'Department', nullable: true, length: 250 })
  Department: string | null;

  @Column('int', {
    name: 'ProjectActivationNotification',
    nullable: true,
    default: () => '(1)',
  })
  ProjectActivationNotification: number | null;

  @Column('varchar', { name: 'Fullname', nullable: true, length: 500 })
  Fullname: string | null;

  @Column('datetime', {
    name: 'TempPasswordDate',
    nullable: true,
    default: () => 'getdate()',
  })
  TempPasswordDate: Date | null;

  @Column('varchar', { name: 'OldUsername', nullable: true, length: 50 })
  OldUsername: string | null;

  @Column('int', { name: 'ChangeUserID', nullable: true })
  ChangeUserID: number | null;

  @Column('varchar', { name: 'PaypalEmail', nullable: true, length: 250 })
  PaypalEmail: string | null;

  @Column('datetime', { name: 'FeedbackNDADate', nullable: true })
  FeedbackNDADate: Date | null;

  @Column('int', { name: 'TalentReport', nullable: true, default: () => '(0)' })
  TalentReport: number | null;

  @Column('uniqueidentifier', {
    name: 'PasswordSalt',
    nullable: true,
    default: () => 'newid()',
  })
  PasswordSalt: string | null;

  @Column('varchar', { name: 'SaltedHash', nullable: true, length: 34 })
  SaltedHash: string | null;

  @Column('int', {
    name: 'CastItSuggestions',
    nullable: true,
    default: () => '(0)',
  })
  CastItSuggestions: number | null;

  @Column('datetime', { name: 'ScriptUserTermsAccepted', nullable: true })
  ScriptUserTermsAccepted: Date | null;

  @Column('nvarchar', { name: 'EmailSignatureBlock', nullable: true })
  EmailSignatureBlock: string | null;

  @Column('datetime', { name: 'NextMostRecentLogin', nullable: true })
  NextMostRecentLogin: Date | null;

  @Column('varchar', {
    name: 'PasswordHash',
    nullable: true,
    length: 100,
    default: () => 'NULL',
  })
  PasswordHash: string | null;

  @Column('bit', { name: 'IsPasswordMigrated', default: () => '(0)' })
  IsPasswordMigrated: boolean;

  @Column('bit', { name: 'PasswordMigratedFromMD5', default: () => '(0)' })
  PasswordMigratedFromMD5: boolean;

  @Column('int', { name: 'CreatedBy', nullable: true })
  CreatedBy: number | null;

  @Column('varchar', { name: 'IpAddress', nullable: true, length: 100 })
  IpAddress: string | null;

  @Column('datetime', { name: 'LastAuditDate', nullable: true })
  LastAuditDate: Date | null;

  @Column('int', { name: 'LastAuditByUserId', nullable: true })
  LastAuditByUserId: number | null;
}
