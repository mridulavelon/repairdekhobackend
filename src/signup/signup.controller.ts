import { Body,Controller, Get, Post } from '@nestjs/common';
import { SignupDto } from './signup.dto';
import { SignupService } from './signup.service';

@Controller('signup')
export class SignupController {

    constructor(
        private readonly signupService:SignupService
    ){}
    @Post()
    signup(@Body() signupDto:SignupDto){
        return this.signupService.signup(signupDto)
    }
    @Get('/getusers')
    getusers(){
        return this.signupService.getusers();
    }
}
