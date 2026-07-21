import { PrismaService } from '../prisma/prisma.service';
import { CreateApplicantDto } from './dto/create-applicant.dto';
import { UpdateApplicantDto } from './dto/update-applicant.dto';
import { ApplicantQueryDto } from './dto/applicant-query.dto';
export declare class ApplicantsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateApplicantDto): import("@prisma/client").Prisma.Prisma__ApplicantClient<{
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
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
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
    findOne(id: string): import("@prisma/client").Prisma.Prisma__ApplicantClient<{
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
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, dto: UpdateApplicantDto): import("@prisma/client").Prisma.Prisma__ApplicantClient<{
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
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__ApplicantClient<{
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
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
