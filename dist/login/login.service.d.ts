import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt/dist';
import { loginDto } from './login.dto';
import { SignupModel } from 'src/signup/signup.model';
export declare class LoginService {
    private loginModel;
    private jwtService;
    constructor(loginModel: Model<SignupModel>, jwtService: JwtService);
    login(loginDto: loginDto): Promise<{
        token: string;
        id: string;
    }>;
}
