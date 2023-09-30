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
exports.AccountdetailsController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const accountdetails_dto_1 = require("./accountdetails.dto");
const accountdetails_service_1 = require("./accountdetails.service");
let AccountdetailsController = class AccountdetailsController {
    constructor(accountdetailsservice) {
        this.accountdetailsservice = accountdetailsservice;
    }
    accountdetailsupdate(accountdetailsdto) {
        return this.accountdetailsservice.updateaccountdetails(accountdetailsdto);
    }
    getaccountdetails(getaccountdetaildto) {
        return this.accountdetailsservice.getaccountdetails(getaccountdetaildto);
    }
    getalluseraccounts() {
        return this.accountdetailsservice.getalluseraccounts();
    }
};
__decorate([
    (0, common_1.Post)('/update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [accountdetails_dto_1.accountdetailsdto]),
    __metadata("design:returntype", void 0)
], AccountdetailsController.prototype, "accountdetailsupdate", null);
__decorate([
    (0, common_1.Post)('/getdetails'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [accountdetails_dto_1.getaccountdetaildto]),
    __metadata("design:returntype", void 0)
], AccountdetailsController.prototype, "getaccountdetails", null);
__decorate([
    (0, decorators_1.Get)('/allaccounts'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AccountdetailsController.prototype, "getalluseraccounts", null);
AccountdetailsController = __decorate([
    (0, common_1.Controller)('accountdetails'),
    __metadata("design:paramtypes", [accountdetails_service_1.AccountdetailsService])
], AccountdetailsController);
exports.AccountdetailsController = AccountdetailsController;
//# sourceMappingURL=accountdetails.controller.js.map