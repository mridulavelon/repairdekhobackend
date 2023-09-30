import { Model } from 'mongoose';
import { SignupModel } from 'src/signup/signup.model';
import { resetpassworddto, resetpasswordlinkdto } from './resetpassword.dto';
import { MailerService } from '@nestjs-modules/mailer/dist/mailer.service';
export declare class ResetpasswordService {
    private resetpasswordmodel;
    private mailservice;
    constructor(resetpasswordmodel: Model<SignupModel>, mailservice: MailerService);
    resetpassword(resetpassworddto: resetpassworddto): Promise<string>;
    sendlink(resetpasswordlinkdto: resetpasswordlinkdto): Promise<any>;
}
