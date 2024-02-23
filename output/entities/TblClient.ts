import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tblClient')
export class TblClient {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ClientKeyID' })
  clientKeyId: number;

  @Column('int', { name: 'ClientID', nullable: true })
  clientId: number | null;

  @Column('varchar', { name: 'Company', nullable: true, length: 100 })
  company: string | null;

  @Column('int', { name: 'AgencyID', nullable: true })
  agencyId: number | null;

  @Column('varchar', { name: 'WebAddress', nullable: true, length: 100 })
  webAddress: string | null;

  @Column('varchar', { name: 'Sitename', nullable: true, length: 100 })
  sitename: string | null;

  @Column('varchar', { name: 'Address1', nullable: true, length: 100 })
  address1: string | null;

  @Column('varchar', { name: 'Address2', nullable: true, length: 100 })
  address2: string | null;

  @Column('varchar', { name: 'City', nullable: true, length: 50 })
  city: string | null;

  @Column('varchar', { name: 'State', nullable: true, length: 50 })
  state: string | null;

  @Column('varchar', { name: 'Country', nullable: true, length: 50 })
  country: string | null;

  @Column('varchar', { name: 'Zip', nullable: true, length: 50 })
  zip: string | null;

  @Column('varchar', { name: 'Phone', nullable: true, length: 50 })
  phone: string | null;

  @Column('varchar', { name: 'Fax', nullable: true, length: 50 })
  fax: string | null;

  @Column('varchar', { name: 'Mobile', nullable: true, length: 50 })
  mobile: string | null;

  @Column('varchar', { name: 'ContactName', nullable: true, length: 100 })
  contactName: string | null;

  @Column('varchar', { name: 'ContactPhone', nullable: true, length: 50 })
  contactPhone: string | null;

  @Column('varchar', { name: 'ContactEmail', nullable: true, length: 50 })
  contactEmail: string | null;

  @Column('varchar', { name: 'Subscription', nullable: true, length: 10 })
  subscription: string | null;

  @Column('int', { name: 'StudioID', nullable: true, default: () => '(0)' })
  studioId: number | null;

  @Column('numeric', {
    name: 'TimeAdjust',
    nullable: true,
    precision: 18,
    scale: 0,
  })
  timeAdjust: number | null;

  @Column('varchar', { name: 'Transfer', nullable: true, length: 10 })
  transfer: string | null;

  @Column('varchar', { name: 'SubAdmin', nullable: true, length: 10 })
  subAdmin: string | null;

  @Column('varchar', { name: 'IMDBPro', nullable: true, length: 10 })
  imdbPro: string | null;

  @Column('varchar', { name: 'InfoShare', nullable: true, length: 10 })
  infoShare: string | null;

  @Column('int', { name: 'NetworkID', nullable: true, default: () => '(0)' })
  networkId: number | null;

  @Column('int', { name: 'ClientTypeID', nullable: true })
  clientTypeId: number | null;

  @Column('uniqueidentifier', {
    name: 'ClientGUID',
    nullable: true,
    default: () => 'newid()',
  })
  clientGuid: string | null;

  @Column('varchar', { name: 'BDRoleText', nullable: true, length: 500 })
  bdRoleText: string | null;

  @Column('varchar', { name: 'BDHeaderText', nullable: true, length: 250 })
  bdHeaderText: string | null;

  @Column('int', { name: 'SigninComputer', nullable: true })
  signinComputer: number | null;

  @Column('varchar', {
    name: 'Active',
    nullable: true,
    length: 10,
    default: () => "'Y'",
  })
  active: string | null;

  @Column('int', { name: 'MetroID', nullable: true })
  metroId: number | null;

  @Column('int', { name: 'TermsID', nullable: true })
  termsId: number | null;

  @Column('int', { name: 'BusinessType', nullable: true, default: () => '(0)' })
  businessType: number | null;

  @Column('varchar', { name: 'ac_demos', nullable: true, length: 100 })
  acDemos: string | null;

  @Column('datetime', { name: 'RecentSubmission', nullable: true })
  recentSubmission: Date | null;

  @Column('datetime', { name: 'ContactModified', nullable: true })
  contactModified: Date | null;

  @Column('int', { name: 'CITUpdate', nullable: true, default: () => '(1)' })
  citUpdate: number | null;

  @Column('varchar', { name: 'OutsideClientUID', nullable: true, length: 100 })
  outsideClientUid: string | null;

  @Column('int', { name: 'DefaultVideoUploadStatus', nullable: true })
  defaultVideoUploadStatus: number | null;
}
