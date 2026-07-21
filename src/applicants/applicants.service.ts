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

create(dto: CreateApplicantDto){

 return this.prisma.applicant.create({
    data:dto
 });

}

async findAll(query: ApplicantQueryDto){

const {
 search,
 status,
 track,
 page = 1,
 limit = 10,
 sortBy = 'createdAt',
 order = 'desc'

}=query;

const skip = (page - 1) * limit;

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

const [items,total]=await Promise.all([

this.prisma.applicant.findMany({

 where,
 skip,
 take:Number(limit),
 orderBy:{
   [sortBy]:order
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
 totalPages:Math.ceil(total / limit)

}

};

}

findOne(id:string){

 return this.prisma.applicant.findFirst({
    where:{
      id,
      deletedAt:null
    }
 });

}

update(
 id:string,
 dto:UpdateApplicantDto
){

 return this.prisma.applicant.update({
    where:{
      id
    },
    data:dto
 });

}

remove(id:string){

 return this.prisma.applicant.update({
    where:{
      id
    },
    data:{
      deletedAt:new Date()
    }
 });

}

async updateStatus(
 id:string,
 dto:UpdateStatusDto
){

 const applicant =
 await this.prisma.applicant.findUnique({
    where:{
      id
    }
 });


 if(!applicant){
    throw new NotFoundException(
      "Applicant not found"
    );
 }


 if(
 applicant.status === ApplicantStatus.REJECTED &&
 dto.status === ApplicantStatus.ACCEPTED
 ){

    throw new BadRequestException(
      "Rejected applicants cannot be directly accepted"
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

 const applicant =
 await this.prisma.applicant.findUnique({
    where:{
      id
    }
 });


 if(!applicant){

    throw new NotFoundException(
      "Applicant not found"
    );

 }


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