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
/// <reference types="mongoose/types/inferschematype" />
import { Document } from "mongoose";
export declare class Orders {
    userid: String;
    brand: String;
    model: String;
    display?: number;
    battery?: number;
    charging?: number;
    backpanel?: number;
    tempered?: number;
    speaker?: number;
    dialer?: number;
    others?: number;
    price: number;
    total: number;
    modelimagelink: string;
    shippingaddress: object;
    orderdate: string;
    orderid: string;
}
export type OrdersModel = Orders & Document;
export declare const OrdersSchema: import("mongoose").Schema<Orders, import("mongoose").Model<Orders, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Orders>;
