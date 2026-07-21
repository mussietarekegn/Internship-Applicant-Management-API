import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateApplicantDto } from './dto/create-applicant.dto';
import { UpdateApplicantDto } from './dto/update-applicant.dto';
import { ApplicantQueryDto } from './dto/applicant-query.dto';

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


}