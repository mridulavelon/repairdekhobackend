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
exports.SignupController = void 0;
const common_1 = require("@nestjs/common");
const signup_dto_1 = require("./signup.dto");
const signup_service_1 = require("./signup.service");
let SignupController = class SignupController {
    constructor(signupService) {
        this.signupService = signupService;
    }
    signup(signupDto) {
        return this.signupService.signup(signupDto);
    }
    getusers() {
        return this.signupService.getusers();
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signup_dto_1.SignupDto]),
    __metadata("design:returntype", void 0)
], SignupController.prototype, "signup", null);
__decorate([
    (0, common_1.Get)('/getusers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SignupController.prototype, "getusers", null);
SignupController = __decorate([
    (0, common_1.Controller)('signup'),
    __metadata("design:paramtypes", [signup_service_1.SignupService])
], SignupController);
exports.SignupController = SignupController;
//# sourceMappingURL=signup.controller.js.map