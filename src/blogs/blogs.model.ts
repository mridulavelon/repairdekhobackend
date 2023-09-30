import { Schema,Prop,SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Blogs {
    @Prop()
    title:string;

    @Prop()
    summary:string;

    @Prop()
    content:string;

    @Prop()
    cover:string;

    @Prop()
    timestamp:string;
}

export type BlogsModel = Blogs & Document

export const BlogsSchema = SchemaFactory.createForClass(Blogs)