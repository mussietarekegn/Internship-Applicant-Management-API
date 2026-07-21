import { ApplicantStatus, InternshipTrack } from '@prisma/client';
export declare class ApplicantQueryDto {
    search?: string;
    status?: ApplicantStatus;
    track?: InternshipTrack;
    page?: number;
    limit?: number;
    sortBy?: string;
    order?: 'asc' | 'desc';
}
