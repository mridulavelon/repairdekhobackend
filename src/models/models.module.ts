import { Module } from '@nestjs/common';
import { ModelsController } from './models.controller';
import { ModelsService } from './models.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ModelsSchema } from './models.model';

@Module({
  imports:[
    MongooseModule.forFeature([{
      name:"Models",
      schema:ModelsSchema
    }])
  ],
  controllers: [ModelsController],
  providers: [ModelsService]
})
export class ModelsModule {}
