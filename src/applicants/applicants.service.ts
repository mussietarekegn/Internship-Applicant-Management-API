import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateApplicantDto } from './dto/create-applicant.dto';
import { UpdateApplicantDto } from './dto/update-applicant.dto';


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



findAll(){

 return this.prisma.applicant.findMany({
    where:{
      deletedAt:null
    }
 });

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