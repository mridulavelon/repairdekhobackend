import { Body, Controller, Post } from '@nestjs/common';
import { ForgotpasswordService } from './forgotpassword.service';
import { forgotpassworddto } from './forgotpassword.dto';

@Controller('forgotpassword')
export class ForgotpasswordController {
    constructor(
        private readonly forgotpasswordservice:ForgotpasswordService
    ){}
    @Post()
    forgotpassword(@Body() forgotpassworddto:forgotpassworddto){
        return this.forgotpasswordservice.forgotpassword(forgotpassworddto)
    }
    

}
