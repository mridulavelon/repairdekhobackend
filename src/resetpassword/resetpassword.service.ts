import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SignupModel } from 'src/signup/signup.model';
import { resetpassworddto, resetpasswordlinkdto } from './resetpassword.dto';
import { MailerService } from '@nestjs-modules/mailer/dist/mailer.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ResetpasswordService {
    constructor(
        @InjectModel("Signup") 
        private resetpasswordmodel:Model<SignupModel>,
        private mailservice:MailerService
    ){}

    async resetpassword(resetpassworddto:resetpassworddto){
        const { id } = resetpassworddto
        const { password } = resetpassworddto
        const _id = id

         const user = await this.resetpasswordmodel.findOne({ _id })

         if(!user){
            throw new BadRequestException("Invalid email")
         }

         await this.resetpasswordmodel.findByIdAndUpdate({_id:id},{password:await bcrypt.hash(password,10)})
         
         return "Password changed successfully"
    }

    async sendlink(resetpasswordlinkdto:resetpasswordlinkdto){
        const { email } = resetpasswordlinkdto

        const user = await this.resetpasswordmodel.findOne({ email })

            var response = await this.mailservice.sendMail({
                to:'randhirs@techved.com',
                from:'kgimis@techved.com',
                subject:'Reset your password',
                text:`Hello customer Kindly below this link to reset your password ${user._id}`
             })
             return response;
        
    }
}
