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
exports.ResetpasswordService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const mailer_service_1 = require("@nestjs-modules/mailer/dist/mailer.service");
const bcrypt = require("bcrypt");
let ResetpasswordService = class ResetpasswordService {
    constructor(resetpasswordmodel, mailservice) {
        this.resetpasswordmodel = resetpasswordmodel;
        this.mailservice = mailservice;
    }
    async resetpassword(resetpassworddto) {
        const { id } = resetpassworddto;
        const { password } = resetpassworddto;
        const _id = id;
        const user = await this.resetpasswordmodel.findOne({ _id });
        if (!user) {
            throw new common_1.BadRequestException("Invalid email");
        }
        await this.resetpasswordmodel.findByIdAndUpdate({ _id: id }, { password: await bcrypt.hash(password, 10) });
        return "Password changed successfully";
    }
    async sendlink(resetpasswordlinkdto) {
        const { email } = resetpasswordlinkdto;
        const user = await this.resetpasswordmodel.findOne({ email });
        var response = await this.mailservice.sendMail({
            to: 'randhirs@techved.com',
            from: 'kgimis@techved.com',
            subject: 'Reset your password',
            text: `Hello customer Kindly below this link to reset your password ${user._id}`
        });
        return response;
    }
};
ResetpasswordService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)("Signup")),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mailer_service_1.MailerService])
], ResetpasswordService);
exports.ResetpasswordService = ResetpasswordService;
//# sourceMappingURL=resetpassword.service.js.map