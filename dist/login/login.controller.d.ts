import { LoginService } from './login.service';
import { loginDto } from './login.dto';
export declare class LoginController {
    private readonly loginservice;
    constructor(loginservice: LoginService);
    login(loginDto: loginDto): Promise<{
        token: string;
    }>;
}
