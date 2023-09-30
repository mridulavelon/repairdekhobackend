import { Body, Controller, Post } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators';
import { accountdetailsdto,getaccountdetaildto } from './accountdetails.dto';
import { AccountdetailsService } from './accountdetails.service';

@Controller('accountdetails')
export class AccountdetailsController {
    constructor(
        private readonly accountdetailsservice:AccountdetailsService
    ){}

    @Post('/update')
    accountdetailsupdate(@Body() accountdetailsdto:accountdetailsdto){
        return this.accountdetailsservice.updateaccountdetails(accountdetailsdto)
    }

    @Post('/getdetails')
    getaccountdetails(@Body() getaccountdetaildto:getaccountdetaildto){
        return this.accountdetailsservice.getaccountdetails(getaccountdetaildto)
    }

    @Get('/allaccounts')
    getalluseraccounts(){
        return this.accountdetailsservice.getalluseraccounts()
    }

}
