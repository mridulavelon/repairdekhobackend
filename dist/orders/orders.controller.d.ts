/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { ordersdto } from './orders.dto';
import { OrdersService } from './orders.service';
import { getuserorderdto } from './orders.dto';
export declare class OrdersController {
    private readonly orderservice;
    constructor(orderservice: OrdersService);
    createorder(ordersdto: ordersdto): Promise<any>;
    getuserorders(getuserorderdto: getuserorderdto): Promise<{
        message: string;
        orders: (import("./orders.model").Orders & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    } | {
        message: {
            (...data: any[]): void;
            (message?: any, ...optionalParams: any[]): void;
        };
        orders?: undefined;
    }>;
    getorders(): Promise<{
        message: string;
        orders: (import("./orders.model").Orders & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    } | {
        message: {
            (...data: any[]): void;
            (message?: any, ...optionalParams: any[]): void;
        };
        orders?: undefined;
    }>;
}
