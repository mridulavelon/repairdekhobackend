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
exports.BlogsController = void 0;
const common_1 = require("@nestjs/common");
const blogs_service_1 = require("./blogs.service");
const blogs_dto_1 = require("./blogs.dto");
const platform_express_1 = require("@nestjs/platform-express");
let BlogsController = class BlogsController {
    constructor(blogsService) {
        this.blogsService = blogsService;
    }
    createBlog(cover, blogsDto) {
        return this.blogsService.createBlog(cover, blogsDto);
    }
    updateBlog(cover, updateBlog) {
        return this.blogsService.updateBlog(cover, updateBlog);
    }
    deleteBlog(deleteBlog) {
        return this.blogsService.deleteBlog(deleteBlog);
    }
    getBlogs() {
        return this.blogsService.getBlogs();
    }
};
__decorate([
    (0, common_1.Post)('/createblog'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('cover')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, blogs_dto_1.blogsdto]),
    __metadata("design:returntype", void 0)
], BlogsController.prototype, "createBlog", null);
__decorate([
    (0, common_1.Post)('/updateblog'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('cover')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, blogs_dto_1.updateBlogDto]),
    __metadata("design:returntype", void 0)
], BlogsController.prototype, "updateBlog", null);
__decorate([
    (0, common_1.Post)('/deleteblog'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [blogs_dto_1.deleteBlogDto]),
    __metadata("design:returntype", void 0)
], BlogsController.prototype, "deleteBlog", null);
__decorate([
    (0, common_1.Get)('/getblogs'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BlogsController.prototype, "getBlogs", null);
BlogsController = __decorate([
    (0, common_1.Controller)('blogs'),
    __metadata("design:paramtypes", [blogs_service_1.BlogsService])
], BlogsController);
exports.BlogsController = BlogsController;
//# sourceMappingURL=blogs.controller.js.map