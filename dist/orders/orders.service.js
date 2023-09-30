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
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const console_1 = require("console");
let OrdersService = class OrdersService {
    constructor(ordersmodel) {
        this.ordersmodel = ordersmodel;
    }
    async createuserorder(ordersdto) {
        const userorder = ordersdto;
        const neworder = new this.ordersmodel(userorder);
        try {
            await neworder.save();
            return { message: 'Order created succesfully' };
        }
        catch (error) {
            return error;
        }
    }
    async getuserorders(getuserorderdto) {
        const { userid } = getuserorderdto;
        const userorders = await this.ordersmodel.find({ userid });
        if (userorders) {
            return {
                message: 'Success',
                orders: userorders
            };
        }
        else {
            return {
                message: console_1.error
            };
        }
    }
    async getorders() {
        const orders = await this.ordersmodel.find({});
        if (orders) {
            return {
                message: 'Success',
                orders: orders
            };
        }
        else {
            return {
                message: console_1.error
            };
        }
    }
};
OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)("Orders")),
    __metadata("design:paramtypes", [mongoose_2.Model])
], OrdersService);
exports.OrdersService = OrdersService;
//# sourceMappingURL=orders.service.js.map