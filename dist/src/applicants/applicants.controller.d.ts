import { ApplicantsService } from './applicants.service';
import { CreateApplicantDto } from './dto/create-applicant.dto';
import { UpdateApplicantDto } from './dto/update-applicant.dto';
import { ApplicantQueryDto } from './dto/applicant-query.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { UpdateNotesDto } from './dto/update-notes.dto';
export declare class ApplicantsController {
    private readonly applicantsService;
    constructor(applicantsService: ApplicantsService);
    create(dto: CreateApplicantDto): Promise<{
        id: string;
        name: string;
        email: string;
        phone: string | null;
        track: import("@prisma/client").$Enums.InternshipTrack;
        status: import("@prisma/client").$Enums.ApplicantStatus;
        notes: string | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }>;
    findAll(query: ApplicantQueryDto): Promise<{
        data: {
            id: string;
            name: string;
            email: string;
            phone: string | null;
            track: import("@prisma/client").$Enums.InternshipTrack;
            status: import("@prisma/client").$Enums.ApplicantStatus;
            notes: string | null;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
        }[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        email: string;
        phone: string | null;
        track: import("@prisma/client").$Enums.InternshipTrack;
        status: import("@prisma/client").$Enums.ApplicantStatus;
        notes: string | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }>;
    update(id: string, dto: UpdateApplicantDto): Promise<{
        id: string;
        name: string;
        email: string;
        phone: string | null;
        track: import("@prisma/client").$Enums.InternshipTrack;
        status: import("@prisma/client").$Enums.ApplicantStatus;
        notes: string | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        email: string;
        phone: string | null;
        track: import("@prisma/client").$Enums.InternshipTrack;
        status: import("@prisma/client").$Enums.ApplicantStatus;
        notes: string | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }>;
    updateStatus(id: string, dto: UpdateStatusDto): Promise<{
        id: string;
        name: string;
        email: string;
        phone: string | null;
        track: import("@prisma/client").$Enums.InternshipTrack;
        status: import("@prisma/client").$Enums.ApplicantStatus;
        notes: string | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }>;
    updateNotes(id: string, dto: UpdateNotesDto): Promise<{
        id: string;
        name: string;
        email: string;
        phone: string | null;
        track: import("@prisma/client").$Enums.InternshipTrack;
        status: import("@prisma/client").$Enums.ApplicantStatus;
        notes: string | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }>;
}
