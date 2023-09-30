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
exports.AccountdetailsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let AccountdetailsService = class AccountdetailsService {
    constructor(accountdetailsmodel) {
        this.accountdetailsmodel = accountdetailsmodel;
    }
    async updateaccountdetails(accountdetailsdto) {
        const { userid } = accountdetailsdto;
        let _id = userid;
        let accountdetailsobject = accountdetailsdto;
        const user = this.accountdetailsmodel.findOne({ _id });
        if (!user) {
            throw new common_1.BadRequestException("User account not found");
        }
        try {
            for (const property in accountdetailsobject) {
                if (property === "email") {
                    await this.accountdetailsmodel.findByIdAndUpdate({ _id: _id }, { email: accountdetailsobject[property] });
                }
                else if (property === "lastname") {
                    await this.accountdetailsmodel.findByIdAndUpdate({ _id: _id }, { lastname: accountdetailsobject[property] });
                }
                else if (property === "firstname") {
                    await this.accountdetailsmodel.findByIdAndUpdate({ _id: _id }, { firstname: accountdetailsobject[property] });
                }
                else if (property === "username") {
                    await this.accountdetailsmodel.findByIdAndUpdate({ _id: _id }, { username: accountdetailsobject[property] });
                }
                else if (property === "billingaddress") {
                    await this.accountdetailsmodel.findByIdAndUpdate({ _id: _id }, { billingaddress: accountdetailsobject[property] });
                }
                else if (property === "shippingaddress") {
                    await this.accountdetailsmodel.findByIdAndUpdate({ _id: _id }, { shippingaddress: accountdetailsobject[property] });
                }
            }
            return {
                "message": "Account updated successfully"
            };
        }
        catch (error) {
            return {
                message: "error"
            };
        }
    }
    async getaccountdetails(getaccountdetaildto) {
        const { userid } = getaccountdetaildto;
        let _id = userid;
        const user = await this.accountdetailsmodel.findOne({ _id });
        let userdata = {
            firstname: user.firstname,
            lastname: user.lastname,
            username: user.username,
            email: user.email,
            billingaddress: user.billingaddress && user.billingaddress,
            shippingaddress: user.shippingaddress && user.shippingaddress
        };
        return userdata;
    }
    async getalluseraccounts() {
        const useraccounts = this.accountdetailsmodel.find();
        return useraccounts;
    }
};
AccountdetailsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)("Signup")),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AccountdetailsService);
exports.AccountdetailsService = AccountdetailsService;
//# sourceMappingURL=accountdetails.service.js.map