import { IsString, IsEmail, IsOptional, IsArray, IsEnum } from 'class-validator';

export class CreateGbpDto {
  @IsString()
  companyName: string;

  @IsString()
  bussinessType: string;

  @IsEmail()
  email: string;

  @IsString()
  bussinessCategory: string;

  @IsString()
  servicesArea: string;

  @IsString()
  phoneNumber: string;

  @IsString()
  website: string;

  @IsString()
  country: string;

  @IsString()
  city: string;

  @IsString()
  state: string;

  @IsString()
  address: string;

  @IsString()
  postalCode: string;

  @IsArray()
  @IsOptional()
  additionalServices?: string[];

  @IsArray()
  @IsOptional()
  schedules?: string[];

  @IsString()
  largeDescription: string;

  @IsString()
  pinterest: string;

  @IsString()
  tiktok: string;

  @IsString()
  linkedin: string;

  @IsString()
  instagram: string;

  @IsString()
  facebook: string;

  @IsString()
  twitter: string;

  @IsString()
  youtube: string;

  @IsString()
  shortDescription: string;

  @IsString()
  customersOpinions: string;

  @IsString()
  featuredProperties: string;

  @IsArray()
  @IsOptional()
  appointmentsContacts?: string[];

  @IsArray()
  @IsOptional()
  relatedAgencies?: string[];

  @IsArray()
  @IsOptional()
  paymentMethods?: string[];

  @IsString()
  hashtags: string;

  @IsString()
  keywords: string;

  @IsString()
  slongan: string;

  @IsString()
  startOperations: string;

  @IsString()
  certification: string;

  @IsString()
  positions: string;

  @IsString()
  description: string;
}
