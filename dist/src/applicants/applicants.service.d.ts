import { PrismaService } from '../prisma/prisma.service';
import { CreateApplicantDto } from './dto/create-applicant.dto';
import { UpdateApplicantDto } from './dto/update-applicant.dto';
import { ApplicantQueryDto } from './dto/applicant-query.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { UpdateNotesDto } from './dto/update-notes.dto';
export declare class ApplicantsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateApplicantDto): Promise<{
        id: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        phone: string | null;
        track: import("@prisma/client").$Enums.InternshipTrack;
        status: import("@prisma/client").$Enums.ApplicantStatus;
        notes: string | null;
        deletedAt: Date | null;
    }>;
    findAll(query: ApplicantQueryDto): Promise<{
        data: {
            id: string;
            email: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            phone: string | null;
            track: import("@prisma/client").$Enums.InternshipTrack;
            status: import("@prisma/client").$Enums.ApplicantStatus;
            notes: string | null;
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
        email: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        phone: string | null;
        track: import("@prisma/client").$Enums.InternshipTrack;
        status: import("@prisma/client").$Enums.ApplicantStatus;
        notes: string | null;
        deletedAt: Date | null;
    }>;
    update(id: string, dto: UpdateApplicantDto): Promise<{
        id: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        phone: string | null;
        track: import("@prisma/client").$Enums.InternshipTrack;
        status: import("@prisma/client").$Enums.ApplicantStatus;
        notes: string | null;
        deletedAt: Date | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        phone: string | null;
        track: import("@prisma/client").$Enums.InternshipTrack;
        status: import("@prisma/client").$Enums.ApplicantStatus;
        notes: string | null;
        deletedAt: Date | null;
    }>;
    updateStatus(id: string, dto: UpdateStatusDto): Promise<{
        id: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        phone: string | null;
        track: import("@prisma/client").$Enums.InternshipTrack;
        status: import("@prisma/client").$Enums.ApplicantStatus;
        notes: string | null;
        deletedAt: Date | null;
    }>;
    updateNotes(id: string, dto: UpdateNotesDto): Promise<{
        id: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        phone: string | null;
        track: import("@prisma/client").$Enums.InternshipTrack;
        status: import("@prisma/client").$Enums.ApplicantStatus;
        notes: string | null;
        deletedAt: Date | null;
    }>;
}
