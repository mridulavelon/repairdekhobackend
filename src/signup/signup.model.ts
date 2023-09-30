import { Schema,Prop,SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Signup {
    @Prop({unique:true})
    username:String;

    @Prop({unique:true})
    email:string;

    @Prop()
    password:String;

    @Prop()
    firstname:String;

    @Prop()
    lastname:String;

    @Prop()
    billingaddress?:String;

    @Prop()
    shippingaddress?:String;
}

export type SignupModel = Signup & Document

export const SignupSchema = SchemaFactory.createForClass(Signup)