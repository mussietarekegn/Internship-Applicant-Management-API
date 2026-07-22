import { PrismaService } from '../prisma/prisma.service';
import { CreateApplicantDto } from './dto/create-applicant.dto';
import { UpdateApplicantDto } from './dto/update-applicant.dto';
import { ApplicantQueryDto } from './dto/applicant-query.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { UpdateNotesDto } from './dto/update-notes.dto';
export declare class ApplicantsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateApplicantDto): import("@prisma/client").Prisma.Prisma__ApplicantClient<{
        id: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        status: import("@prisma/client").$Enums.ApplicantStatus;
        track: import("@prisma/client").$Enums.InternshipTrack;
        phone: string | null;
        notes: string | null;
        deletedAt: Date | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(query: ApplicantQueryDto): Promise<{
        data: {
            id: string;
            email: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            status: import("@prisma/client").$Enums.ApplicantStatus;
            track: import("@prisma/client").$Enums.InternshipTrack;
            phone: string | null;
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
    findOne(id: string): import("@prisma/client").Prisma.Prisma__ApplicantClient<{
        id: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        status: import("@prisma/client").$Enums.ApplicantStatus;
        track: import("@prisma/client").$Enums.InternshipTrack;
        phone: string | null;
        notes: string | null;
        deletedAt: Date | null;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, dto: UpdateApplicantDto): import("@prisma/client").Prisma.Prisma__ApplicantClient<{
        id: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        status: import("@prisma/client").$Enums.ApplicantStatus;
        track: import("@prisma/client").$Enums.InternshipTrack;
        phone: string | null;
        notes: string | null;
        deletedAt: Date | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__ApplicantClient<{
        id: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        status: import("@prisma/client").$Enums.ApplicantStatus;
        track: import("@prisma/client").$Enums.InternshipTrack;
        phone: string | null;
        notes: string | null;
        deletedAt: Date | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    updateStatus(id: string, dto: UpdateStatusDto): Promise<{
        id: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        status: import("@prisma/client").$Enums.ApplicantStatus;
        track: import("@prisma/client").$Enums.InternshipTrack;
        phone: string | null;
        notes: string | null;
        deletedAt: Date | null;
    }>;
    updateNotes(id: string, dto: UpdateNotesDto): Promise<{
        id: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        status: import("@prisma/client").$Enums.ApplicantStatus;
        track: import("@prisma/client").$Enums.InternshipTrack;
        phone: string | null;
        notes: string | null;
        deletedAt: Date | null;
    }>;
}
