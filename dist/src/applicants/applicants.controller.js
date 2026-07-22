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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicantsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const applicants_service_1 = require("./applicants.service");
const create_applicant_dto_1 = require("./dto/create-applicant.dto");
const update_applicant_dto_1 = require("./dto/update-applicant.dto");
const applicant_query_dto_1 = require("./dto/applicant-query.dto");
const update_status_dto_1 = require("./dto/update-status.dto");
const update_notes_dto_1 = require("./dto/update-notes.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
let ApplicantsController = class ApplicantsController {
    applicantsService;
    constructor(applicantsService) {
        this.applicantsService = applicantsService;
    }
    create(dto) {
        return this.applicantsService.create(dto);
    }
    findAll(query) {
        return this.applicantsService.findAll(query);
    }
    findOne(id) {
        return this.applicantsService.findOne(id);
    }
    update(id, dto) {
        return this.applicantsService.update(id, dto);
    }
    remove(id) {
        return this.applicantsService.remove(id);
    }
    updateStatus(id, dto) {
        return this.applicantsService.updateStatus(id, dto);
    }
    updateNotes(id, dto) {
        return this.applicantsService.updateNotes(id, dto);
    }
};
exports.ApplicantsController = ApplicantsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_applicant_dto_1.CreateApplicantDto]),
    __metadata("design:returntype", void 0)
], ApplicantsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [applicant_query_dto_1.ApplicantQueryDto]),
    __metadata("design:returntype", void 0)
], ApplicantsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ApplicantsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_applicant_dto_1.UpdateApplicantDto]),
    __metadata("design:returntype", void 0)
], ApplicantsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ApplicantsController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)(':id/status'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_status_dto_1.UpdateStatusDto]),
    __metadata("design:returntype", void 0)
], ApplicantsController.prototype, "updateStatus", null);
__decorate([
    (0, common_1.Patch)(':id/notes'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_notes_dto_1.UpdateNotesDto]),
    __metadata("design:returntype", void 0)
], ApplicantsController.prototype, "updateNotes", null);
exports.ApplicantsController = ApplicantsController = __decorate([
    (0, swagger_1.ApiTags)('Applicants'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('api/applicants'),
    __metadata("design:paramtypes", [applicants_service_1.ApplicantsService])
], ApplicantsController);
//# sourceMappingURL=applicants.controller.js.map