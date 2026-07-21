import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ApplicantStatus, InternshipTrack } from '@prisma/client';

export class ApplicantQueryDto {

  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsEnum(ApplicantStatus)
  status?: ApplicantStatus;

  @IsOptional()
  @IsEnum(InternshipTrack)
  track?: InternshipTrack;

  @IsOptional()
  page?: number;

  @IsOptional()
  limit?: number;

  @IsOptional()
  sortBy?: string;

  @IsOptional()
  order?: 'asc' | 'desc';

}