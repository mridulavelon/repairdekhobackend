import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SignupModel } from 'src/signup/signup.model';
import { Model } from 'mongoose';
import { forgotpassworddto } from './forgotpassword.dto';


@Injectable()
export class ForgotpasswordService {
    constructor(
        @InjectModel("Signup") 
        private forgotpasswordmodel:Model<SignupModel>,
    ){}

    async forgotpassword(forgotpassworddto:forgotpassworddto){
         const { email } = forgotpassworddto

         const user = await this.forgotpasswordmodel.findOne({ email })

         if(!user){
            throw new BadRequestException("Invalid email")
         }
         return "Email verified"
    }
}
