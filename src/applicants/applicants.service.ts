import {
NotFoundException,
BadRequestException
} from '@nestjs/common';

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateApplicantDto } from './dto/create-applicant.dto';
import { UpdateApplicantDto } from './dto/update-applicant.dto';
import { ApplicantQueryDto } from './dto/applicant-query.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { UpdateNotesDto } from './dto/update-notes.dto';
import { ApplicantStatus } from '@prisma/client';

@Injectable()
export class ApplicantsService {

constructor(
 private prisma: PrismaService,
){}
// CREATE APPLICANT
  async create(
    dto: CreateApplicantDto,
  ){

    try {
      return await this.prisma.applicant.create({
        data:dto
      });

    } catch(error:any){

      if(error.code === 'P2002'){
        throw new BadRequestException(
          'Applicant email already exists'
        );
      }

      throw error;
    }
  }

  async findAll(
    query: ApplicantQueryDto
  ){

    const {
      search,
      status,
      track,
      page = 1,
      limit = 10,
      sortBy = 'createdAt',
      order = 'desc'
    } = query;

    const skip =
      (Number(page)-1)
      *
      Number(limit);

    const where:any = {
      deletedAt:null

    };
    if(search){
      where.OR=[
        {
          name:{
            contains:search,
            mode:'insensitive'
          }
        },

        {
          email:{
            contains:search,
            mode:'insensitive'
          }
        }

      ];

    }
    
    if(status){

      where.status=status;

    }

    if(track){

      where.track=track;

    }

    const allowedSortFields=[

      'createdAt',
      'name',
      'email',
      'status'

    ];

    const safeSort = allowedSortFields.includes(sortBy)?sortBy:'createdAt';

    const [items,total]=
    await Promise.all([
      this.prisma.applicant.findMany({
        where,
        skip,
        take:Number(limit),
        orderBy:{
          [safeSort]:
          order === 'asc'
          ?
          'asc'
          :
          'desc'
        }
      }),

      this.prisma.applicant.count({
        where
      })

    ]);

    return {
      data:items,
      meta:{
        total,
        page:Number(page),
        limit:Number(limit),
        totalPages:
        Math.ceil(
          total / Number(limit)
        )
      }
    };
  }
  async findOne(
    id:string
  ){
    const applicant =
    await this.prisma.applicant.findFirst({
      where:{
        id,
        deletedAt:null
      }
    });

    if(!applicant){
      throw new NotFoundException(
        'Applicant not found'
      );
    }
    return applicant;
  }

  async update(
    id:string,
    dto:UpdateApplicantDto
  ){
    await this.findOne(id);
    return this.prisma.applicant.update({
      where:{
        id
      },
      data:dto
    });

  }
  async remove(
    id:string
  ){
    await this.findOne(id);
    return this.prisma.applicant.update({
      where:{
        id
      },
      data:{
        deletedAt:
        new Date()
      }
    });
  }
  async updateStatus(
    id:string,
    dto:UpdateStatusDto
  ){

    const applicant =
    await this.findOne(id);

    if(
      applicant.status ===
      ApplicantStatus.REJECTED
      &&
      dto.status ===
      ApplicantStatus.ACCEPTED
    ){

      throw new BadRequestException(
        'Rejected applicants cannot be directly accepted'
      );

    }

    return this.prisma.applicant.update({
      where:{
        id
      },
      data:{
        status:dto.status

      }

    });

  }
  async updateNotes(
    id:string,
    dto:UpdateNotesDto

  ){

    await this.findOne(id);
    return this.prisma.applicant.update({

      where:{
        id
      },
      data:{
        notes:dto.notes
      }
    });
  }

}