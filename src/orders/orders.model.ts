import { Schema,Prop,SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema()
export class Orders{
    @Prop()
    userid:String;

    @Prop()
    brand:String;

    @Prop()
    model:String;

    @Prop()
    display?:number;

    @Prop()
    battery?:number;

    @Prop()
    charging?:number;

    @Prop()
    backpanel?:number;

    @Prop()
    tempered?:number;

    @Prop()
    speaker?:number;

    @Prop()
    dialer?:number;

    @Prop()
    others?:number;

    @Prop()
    price:number;

    @Prop()
    total:number;

    @Prop()
    modelimagelink:string;

    @Prop({ type:Object })
    shippingaddress:object;

    @Prop()
    orderdate:string;

    @Prop({unique:true})
    orderid:string;
}

export type OrdersModel = Orders & Document

export const OrdersSchema = SchemaFactory.createForClass(Orders)