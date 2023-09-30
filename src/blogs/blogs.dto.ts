export class blogsdto{
    readonly title:string;
    readonly summary:string;
    readonly content:string;
    readonly timestamp:string;
}
export class updateBlogDto{
    readonly id:string;
    readonly title:string;
    readonly summary:string;
    readonly content:string;
    readonly cover:string;
    readonly timestamp:string;
}
export class deleteBlogDto{
    readonly id:string;
}