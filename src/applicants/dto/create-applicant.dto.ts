import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

import {
  InternshipTrack,
  ApplicantStatus,
} from '@prisma/client';


export class CreateApplicantDto {


  @IsString()
  name!: string;


  @IsEmail()
  email!: string;


  @IsOptional()
  @IsString()
  phone?: string;


  @IsEnum(InternshipTrack)
  track!: InternshipTrack;


  @IsOptional()
  @IsEnum(ApplicantStatus)
  status?: ApplicantStatus;


  @IsOptional()
  @IsString()
  @MaxLength(1000)
  notes?: string;

}