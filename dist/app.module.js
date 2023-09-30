"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const mongoose_1 = require("@nestjs/mongoose");
const signup_module_1 = require("./signup/signup.module");
const login_module_1 = require("./login/login.module");
const config_1 = require("@nestjs/config");
const forgotpassword_module_1 = require("./forgotpassword/forgotpassword.module");
const mailer_1 = require("@nestjs-modules/mailer");
const resetpassword_module_1 = require("./resetpassword/resetpassword.module");
const orders_module_1 = require("./orders/orders.module");
const accountdetails_module_1 = require("./accountdetails/accountdetails.module");
const models_module_1 = require("./models/models.module");
const admin_module_1 = require("./admin/admin.module");
const blogs_module_1 = require("./blogs/blogs.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: '.env',
                isGlobal: true
            }),
            mongoose_1.MongooseModule.forRoot('mongodb+srv://mridul:pAXVlWv1uxfiYbqn@cluster0.hzoosy1.mongodb.net/?retryWrites=true&w=majority', {
                dbName: 'test',
            }),
            mailer_1.MailerModule.forRoot({
                transport: {
                    host: 'ns27.interactivedns.com',
                    port: 465,
                    secure: true,
                    auth: {
                        user: 'kgimis@techved.com',
                        pass: 'bt]JHkoG@0pd'
                    }
                }
            }),
            signup_module_1.SignupModule,
            login_module_1.LoginModule,
            forgotpassword_module_1.ForgotpasswordModule,
            resetpassword_module_1.ResetpasswordModule,
            orders_module_1.OrdersModule,
            accountdetails_module_1.AccountdetailsModule,
            models_module_1.ModelsModule,
            admin_module_1.AdminModule,
            blogs_module_1.BlogsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map