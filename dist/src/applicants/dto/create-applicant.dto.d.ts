import { InternshipTrack, ApplicantStatus } from '@prisma/client';
export declare class CreateApplicantDto {
    name: string;
    email: string;
    phone?: string;
    track: InternshipTrack;
    status?: ApplicantStatus;
    notes?: string;
}
