import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import { loginDto } from './login.dto';

@Controller('login')
export class LoginController {
    constructor(
        private readonly loginservice:LoginService
    ){}
    @Post()
    login(@Body() loginDto:loginDto): Promise<{token : string}>{
        return this.loginservice.login(loginDto)
    }
}
