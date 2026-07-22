import { PrismaService } from '../prisma/prisma.service';
export declare class DashboardService {
    private prisma;
    constructor(prisma: PrismaService);
    getSummary(): Promise<{
        totalApplicants: number;
        pending: number;
        shortlisted: number;
        accepted: number;
        rejected: number;
        tracks: {
            FRONTEND: number;
            BACKEND: number;
            MOBILE: number;
            UI_UX: number;
            DATA_ANALYTICS: number;
        };
    }>;
}
