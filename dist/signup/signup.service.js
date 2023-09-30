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
exports.SignupService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcrypt");
const console_1 = require("console");
let SignupService = class SignupService {
    constructor(signupModel) {
        this.signupModel = signupModel;
    }
    async signup(user) {
        const newUser = new this.signupModel({
            firstname: user.firstname,
            lastname: user.lastname,
            username: user.username,
            email: user.email,
            password: await bcrypt.hash(user.password, 10),
        });
        try {
            await newUser.save();
        }
        catch (error) {
            if (error.message.includes('username')) {
                throw new common_1.HttpException('username has been already taken', 404);
            }
            if (error.message.includes('email')) {
                throw new common_1.HttpException('email has been already taken', 404);
            }
        }
    }
    async getusers() {
        const users = await this.signupModel.find({});
        if (users) {
            return {
                message: 'Success',
                orders: users
            };
        }
        else {
            return {
                message: console_1.error
            };
        }
    }
};
SignupService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)("Signup")),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SignupService);
exports.SignupService = SignupService;
//# sourceMappingURL=signup.service.js.map