import { Module } from '@nestjs/common';
import { BlogsController } from './blogs.controller';
import { BlogsService } from './blogs.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogsSchema } from './blogs.model';

@Module({
  imports:[
    MongooseModule.forFeature([{
      name:"blogs",
      schema:BlogsSchema
    }])
  ],
  controllers: [BlogsController],
  providers: [BlogsService]
})
export class BlogsModule {}
