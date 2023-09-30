import { ForgotpasswordService } from './forgotpassword.service';
import { forgotpassworddto } from './forgotpassword.dto';
export declare class ForgotpasswordController {
    private readonly forgotpasswordservice;
    constructor(forgotpasswordservice: ForgotpasswordService);
    forgotpassword(forgotpassworddto: forgotpassworddto): Promise<string>;
}
