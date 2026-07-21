import { PrismaService } from '../prisma/prisma.service';
import { CreateApplicantDto } from './dto/create-applicant.dto';
import { UpdateApplicantDto } from './dto/update-applicant.dto';
export declare class ApplicantsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateApplicantDto): import("@prisma/client").Prisma.Prisma__ApplicantClient<{
        name: string;
        email: string;
        phone: string | null;
        track: import("@prisma/client").$Enums.InternshipTrack;
        status: import("@prisma/client").$Enums.ApplicantStatus;
        notes: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        name: string;
        email: string;
        phone: string | null;
        track: import("@prisma/client").$Enums.InternshipTrack;
        status: import("@prisma/client").$Enums.ApplicantStatus;
        notes: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }[]>;
    findOne(id: string): import("@prisma/client").Prisma.Prisma__ApplicantClient<{
        name: string;
        email: string;
        phone: string | null;
        track: import("@prisma/client").$Enums.InternshipTrack;
        status: import("@prisma/client").$Enums.ApplicantStatus;
        notes: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, dto: UpdateApplicantDto): import("@prisma/client").Prisma.Prisma__ApplicantClient<{
        name: string;
        email: string;
        phone: string | null;
        track: import("@prisma/client").$Enums.InternshipTrack;
        status: import("@prisma/client").$Enums.ApplicantStatus;
        notes: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__ApplicantClient<{
        name: string;
        email: string;
        phone: string | null;
        track: import("@prisma/client").$Enums.InternshipTrack;
        status: import("@prisma/client").$Enums.ApplicantStatus;
        notes: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
