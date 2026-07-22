import {
 Controller,
 Get,
 Post,
 Body,
 Patch,
 Param,
 Delete,
 Query,
 UseGuards,
} from '@nestjs/common';
import {ApiBearerAuth,ApiTags,} from '@nestjs/swagger';
import { ApplicantsService } from './applicants.service';
import { CreateApplicantDto } from './dto/create-applicant.dto';
import { UpdateApplicantDto } from './dto/update-applicant.dto';
import { ApplicantQueryDto } from './dto/applicant-query.dto';
import { UpdateStatusDto }from './dto/update-status.dto';
import { UpdateNotesDto } from './dto/update-notes.dto';
import { JwtAuthGuard }from '../auth/guards/jwt-auth.guard';

@ApiTags('Applicants')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('api/applicants')
export class ApplicantsController {
constructor(
 private readonly applicantsService: ApplicantsService
){}

@Post()
create(
 @Body() dto:CreateApplicantDto
){

 return this.applicantsService.create(dto);

}

@Get()
findAll(
 @Query() query:ApplicantQueryDto
){

 return this.applicantsService.findAll(query);

}

@Get(':id')
findOne(
 @Param('id') id:string
){

 return this.applicantsService.findOne(id);

}

@Patch(':id')
update(
 @Param('id') id:string,
 @Body() dto:UpdateApplicantDto
){

 return this.applicantsService.update(
  id,
  dto
 );

}

@Delete(':id')
remove(
 @Param('id') id:string
){

 return this.applicantsService.remove(id);

}

@Patch(':id/status')
updateStatus(
 @Param('id') id:string,
 @Body() dto:UpdateStatusDto
){

 return this.applicantsService.updateStatus(
  id,
  dto
 );

}

@Patch(':id/notes')
updateNotes(
 @Param('id') id:string,
 @Body() dto:UpdateNotesDto
){

 return this.applicantsService.updateNotes(
  id,
  dto
 );

}

}