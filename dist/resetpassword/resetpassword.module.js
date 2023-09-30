"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetpasswordModule = void 0;
const common_1 = require("@nestjs/common");
const resetpassword_controller_1 = require("./resetpassword.controller");
const resetpassword_service_1 = require("./resetpassword.service");
const signup_model_1 = require("../signup/signup.model");
const mongoose_1 = require("@nestjs/mongoose");
let ResetpasswordModule = class ResetpasswordModule {
};
ResetpasswordModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{
                    name: "Signup",
                    schema: signup_model_1.SignupSchema
                }])
        ],
        controllers: [resetpassword_controller_1.ResetpasswordController],
        providers: [resetpassword_service_1.ResetpasswordService]
    })
], ResetpasswordModule);
exports.ResetpasswordModule = ResetpasswordModule;
//# sourceMappingURL=resetpassword.module.js.map