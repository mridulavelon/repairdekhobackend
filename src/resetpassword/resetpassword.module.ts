import { Module } from '@nestjs/common';
import { ResetpasswordController } from './resetpassword.controller';
import { ResetpasswordService } from './resetpassword.service';
import { SignupSchema } from 'src/signup/signup.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports:[
      MongooseModule.forFeature([{
        name:"Signup",
        schema:SignupSchema
      }])
    ],
    controllers: [ResetpasswordController],
    providers: [ResetpasswordService]
  })
export class ResetpasswordModule {}
