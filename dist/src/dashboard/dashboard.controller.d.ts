import { DashboardService } from './dashboard.service';
export declare class DashboardController {
    private readonly dashboardService;
    constructor(dashboardService: DashboardService);
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
