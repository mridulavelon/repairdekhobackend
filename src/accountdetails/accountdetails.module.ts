import { Module } from '@nestjs/common';
import { AccountdetailsController } from './accountdetails.controller';
import { AccountdetailsService } from './accountdetails.service';
import { SignupSchema } from 'src/signup/signup.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[
    MongooseModule.forFeature([{
      name:"Signup",
      schema:SignupSchema
    }])
  ],
  controllers: [AccountdetailsController],
  providers: [AccountdetailsService]
})
export class AccountdetailsModule {}
