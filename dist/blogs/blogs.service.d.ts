/// <reference types="multer" />
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
import { BlogsModel } from './blogs.model';
import { Model } from 'mongoose';
import { blogsdto, deleteBlogDto, updateBlogDto } from './blogs.dto';
export declare class BlogsService {
    private blogsModel;
    constructor(blogsModel: Model<BlogsModel>);
    createBlog(cover: Express.Multer.File, blog: blogsdto): Promise<{
        success: boolean;
        message: string;
    } | {
        success: boolean;
        error: string;
    }>;
    updateBlog(cover: Express.Multer.File, updateBlog: updateBlogDto): Promise<{
        success: boolean;
        response: string;
    } | {
        success: boolean;
        error: string;
    }>;
    deleteBlog(deleteBlog: deleteBlogDto): Promise<{
        success: boolean;
        response: string;
    } | {
        success: boolean;
        error: string;
    }>;
    getBlogs(): Promise<{
        message: string;
        blogs: (import("./blogs.model").Blogs & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    } | {
        message: string;
        blogs?: undefined;
    }>;
}
