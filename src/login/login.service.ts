import { HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { LoginModel } from './login.model';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt/dist';
import { loginDto } from './login.dto';
import { SignupModel } from 'src/signup/signup.model';

@Injectable()
export class LoginService {
    constructor(
        @InjectModel("Signup") 
        private loginModel:Model<SignupModel>,
        private jwtService : JwtService
    ){}

     async login(loginDto:loginDto): Promise<{ token : string,id : string}> {
        const { email, password } = loginDto;

        const user = await this.loginModel.findOne({ email })

        if(!user) {
            throw new UnauthorizedException('Invalid email or password')
        }

        const isPasswordMatched = await bcrypt.compare(password,user.password)

        if(!isPasswordMatched){
            throw new UnauthorizedException('Invalid email or password')
        }
        const token  = this.jwtService.sign({id:user._id});

        return  {token,id:user._id} ;
     }    
}
  