import { SignupModel } from 'src/signup/signup.model';
import { Model } from 'mongoose';
import { forgotpassworddto } from './forgotpassword.dto';
export declare class ForgotpasswordService {
    private forgotpasswordmodel;
    constructor(forgotpasswordmodel: Model<SignupModel>);
    forgotpassword(forgotpassworddto: forgotpassworddto): Promise<string>;
}
