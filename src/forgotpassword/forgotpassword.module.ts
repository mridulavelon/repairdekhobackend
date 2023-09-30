import { Module } from '@nestjs/common';
import { ForgotpasswordService } from './forgotpassword.service';
import { ForgotpasswordController } from './forgotpassword.controller';
import { SignupSchema } from 'src/signup/signup.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[
    MongooseModule.forFeature([{
      name:"Signup",
      schema:SignupSchema
    }])
  ],
  providers: [ForgotpasswordService],
  controllers: [ForgotpasswordController]
})
export class ForgotpasswordModule {}
