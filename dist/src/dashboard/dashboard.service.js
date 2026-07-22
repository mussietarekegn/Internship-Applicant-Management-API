"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
let DashboardService = class DashboardService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getSummary() {
        const where = {
            deletedAt: null,
        };
        const [totalApplicants, pending, shortlisted, accepted, rejected, trackCounts,] = await Promise.all([
            this.prisma.applicant.count({ where }),
            this.prisma.applicant.count({
                where: {
                    ...where,
                    status: client_1.ApplicantStatus.PENDING,
                },
            }),
            this.prisma.applicant.count({
                where: {
                    ...where,
                    status: client_1.ApplicantStatus.SHORTLISTED,
                },
            }),
            this.prisma.applicant.count({
                where: {
                    ...where,
                    status: client_1.ApplicantStatus.ACCEPTED,
                },
            }),
            this.prisma.applicant.count({
                where: {
                    ...where,
                    status: client_1.ApplicantStatus.REJECTED,
                },
            }),
            this.prisma.applicant.groupBy({
                by: ['track'],
                where,
                _count: true,
            }),
        ]);
        const tracks = {
            FRONTEND: 0,
            BACKEND: 0,
            MOBILE: 0,
            UI_UX: 0,
            DATA_ANALYTICS: 0,
        };
        trackCounts.forEach((item) => {
            tracks[item.track] = item._count;
        });
        return {
            totalApplicants,
            pending,
            shortlisted,
            accepted,
            rejected,
            tracks,
        };
    }
};
exports.DashboardService = DashboardService;
exports.DashboardService = DashboardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DashboardService);
//# sourceMappingURL=dashboard.service.js.map