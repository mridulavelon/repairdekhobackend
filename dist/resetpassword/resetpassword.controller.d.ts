import { resetpassworddto, resetpasswordlinkdto } from './resetpassword.dto';
import { ResetpasswordService } from './resetpassword.service';
export declare class ResetpasswordController {
    private readonly resetpasswordservice;
    constructor(resetpasswordservice: ResetpasswordService);
    resetpassword(resetpassworddto: resetpassworddto): Promise<string>;
    resetpasswordlink(resetpasswordlinkdto: resetpasswordlinkdto): Promise<any>;
}
