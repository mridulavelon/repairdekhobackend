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
exports.ForgotpasswordController = void 0;
const common_1 = require("@nestjs/common");
const forgotpassword_service_1 = require("./forgotpassword.service");
const forgotpassword_dto_1 = require("./forgotpassword.dto");
let ForgotpasswordController = class ForgotpasswordController {
    constructor(forgotpasswordservice) {
        this.forgotpasswordservice = forgotpasswordservice;
    }
    forgotpassword(forgotpassworddto) {
        return this.forgotpasswordservice.forgotpassword(forgotpassworddto);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [forgotpassword_dto_1.forgotpassworddto]),
    __metadata("design:returntype", void 0)
], ForgotpasswordController.prototype, "forgotpassword", null);
ForgotpasswordController = __decorate([
    (0, common_1.Controller)('forgotpassword'),
    __metadata("design:paramtypes", [forgotpassword_service_1.ForgotpasswordService])
], ForgotpasswordController);
exports.ForgotpasswordController = ForgotpasswordController;
//# sourceMappingURL=forgotpassword.controller.js.map