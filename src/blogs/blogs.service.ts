import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BlogsModel } from './blogs.model';
import { Model } from 'mongoose';
import { blogsdto, deleteBlogDto, updateBlogDto } from './blogs.dto';

@Injectable()
export class BlogsService {
    constructor(
        @InjectModel("blogs") private blogsModel:Model<BlogsModel>
    ){}

    async createBlog(cover:Express.Multer.File,blog : blogsdto){
        const fileB64 = cover.buffer.toString('base64');
        const newBlog = new this.blogsModel({
            title:blog.title,
            summary:blog.summary,
            content:blog.content,
            cover:fileB64,
            timestamp:blog.timestamp
       })
       try {
           const created = await newBlog.save().then(() => {
              return {success:true, message : "Successfully created blog"}
           }).catch(() => {
               return {success:false, error : "Something went wrong"}
           })
           return created;
         }
         catch(error){
              throw new HttpException(`${error}`,404)
         }
    }
    async updateBlog(cover:Express.Multer.File,updateBlog:updateBlogDto){
        const { id } = updateBlog;
        const _id = id;
        const fileB64 = cover.buffer.toString('base64');
        const blog = await this.blogsModel.findOne({ _id });
        if(blog){
            const updated = await this.blogsModel.findByIdAndUpdate({_id:id},{title:updateBlog.title,summary:updateBlog.summary,cover:fileB64,timestamp:updateBlog.timestamp})
            .then(() => {
               return {success:true,response:"Successfully Updated Blog"}
            }).catch(() => {
                return {success:false,error:"Something went wrong"}
            })
            return updated;  
        }else{
           return {success:false,error:"No blogs found"}
        }
    }
    async deleteBlog(deleteBlog : deleteBlogDto){
       const { id }  =  deleteBlog;
       const deleted = await this.blogsModel.deleteOne({ _id: id }).then(() => {
        return {success:true,response:"Successfully Updated Blog"}
       }).catch((error) => {
         return {success:false,error:"Something went wrong"} 
       })
       return deleted;
    }
    async getBlogs(){
        const blogs = await this.blogsModel.find({});

        if(blogs){
            return {
                message:'Success',
                blogs:blogs
            }
         }else{
            return {
                message:"Something went wrong"
            }
         }
    }
}
