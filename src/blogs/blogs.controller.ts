import { Body,Controller, Post , Get, UseInterceptors, UploadedFile } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { blogsdto, deleteBlogDto, updateBlogDto } from './blogs.dto';
import { FileInterceptor } from '@nestjs/platform-express';
// import { diskStorage } from 'multer';
// import * as path from 'path';

@Controller('blogs')
export class BlogsController {
    constructor(
        private readonly blogsService:BlogsService
    ){}
    @Post('/createblog')
    @UseInterceptors(FileInterceptor('cover'))
    createBlog(@UploadedFile() cover:Express.Multer.File,@Body() blogsDto:blogsdto){
        return this.blogsService.createBlog(cover,blogsDto)
    }

    @Post('/updateblog')
    @UseInterceptors(FileInterceptor('cover'))
    updateBlog(@UploadedFile() cover:Express.Multer.File,@Body() updateBlog:updateBlogDto){
        return this.blogsService.updateBlog(cover,updateBlog);
    }

    @Post('/deleteblog')
    deleteBlog(@Body() deleteBlog:deleteBlogDto){
        return this.blogsService.deleteBlog(deleteBlog);
    }
    @Get('/getblogs')
    getBlogs(){
        return this.blogsService.getBlogs();
    }
}
