"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let BlogsService = class BlogsService {
    constructor(blogsModel) {
        this.blogsModel = blogsModel;
    }
    async createBlog(cover, blog) {
        const fileB64 = cover.buffer.toString('base64');
        const newBlog = new this.blogsModel({
            title: blog.title,
            summary: blog.summary,
            content: blog.content,
            cover: fileB64,
            timestamp: blog.timestamp
        });
        try {
            const created = await newBlog.save().then(() => {
                return { success: true, message: "Successfully created blog" };
            }).catch(() => {
                return { success: false, error: "Something went wrong" };
            });
            return created;
        }
        catch (error) {
            throw new common_1.HttpException(`${error}`, 404);
        }
    }
    async updateBlog(cover, updateBlog) {
        const { id } = updateBlog;
        const _id = id;
        const fileB64 = cover.buffer.toString('base64');
        const blog = await this.blogsModel.findOne({ _id });
        if (blog) {
            const updated = await this.blogsModel.findByIdAndUpdate({ _id: id }, { title: updateBlog.title, summary: updateBlog.summary, cover: fileB64, timestamp: updateBlog.timestamp })
                .then(() => {
                return { success: true, response: "Successfully Updated Blog" };
            }).catch(() => {
                return { success: false, error: "Something went wrong" };
            });
            return updated;
        }
        else {
            return { success: false, error: "No blogs found" };
        }
    }
    async deleteBlog(deleteBlog) {
        const { id } = deleteBlog;
        const deleted = await this.blogsModel.deleteOne({ _id: id }).then(() => {
            return { success: true, response: "Successfully Updated Blog" };
        }).catch((error) => {
            return { success: false, error: "Something went wrong" };
        });
        return deleted;
    }
    async getBlogs() {
        const blogs = await this.blogsModel.find({});
        if (blogs) {
            return {
                message: 'Success',
                blogs: blogs
            };
        }
        else {
            return {
                message: "Something went wrong"
            };
        }
    }
};
BlogsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)("blogs")),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BlogsService);
exports.BlogsService = BlogsService;
//# sourceMappingURL=blogs.service.js.map