import { Schema,Prop,SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Login {
    @Prop({unique:true})
    email:String;

    @Prop()
    password:String;
}

export type LoginModel = Login & Document

export const LoginSchema = SchemaFactory.createForClass(Login)