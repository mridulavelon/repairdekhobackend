import { Schema,Prop,SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class displayObj {
    @Prop()
    local:number;

    @Prop()
    branded:number;   
}

@Schema()
export class Models {
    @Prop()
    brand:string;

    @Prop()
    type:string;

    @Prop()
    modelname:string;

    @Prop()
    touch?:number;

    @Prop({ type : displayObj})
    display?:displayObj;

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
    others:number;

    @Prop()
    modelimagelink?:string;

    @Prop()
    smallimagelink?:string;
}

export type ModelsModel = Models & Document

export const ModelsSchema = SchemaFactory.createForClass(Models)