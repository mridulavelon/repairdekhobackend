import { Body, Controller, Post } from '@nestjs/common';
import { resetpassworddto, resetpasswordlinkdto } from './resetpassword.dto';
import { ResetpasswordService } from './resetpassword.service';

@Controller('resetpassword')
export class ResetpasswordController {
    constructor(
        private readonly resetpasswordservice:ResetpasswordService
    ){}
    @Post()
    resetpassword(@Body() resetpassworddto:resetpassworddto){
        return this.resetpasswordservice.resetpassword(resetpassworddto)
    }

    @Post('/sendlink')
    resetpasswordlink(@Body() resetpasswordlinkdto:resetpasswordlinkdto){
        return this.resetpasswordservice.sendlink(resetpasswordlinkdto)
    }
}
