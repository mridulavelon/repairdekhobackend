import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config/dist';
import { SignupSchema } from 'src/signup/signup.model';

@Module({
  imports:[
    PassportModule.register({ defaultStrategy : 'jwt'}),
    JwtModule.registerAsync({
      useFactory:(config: ConfigService) => {
        return {
           secret:'mridulavelon',
           signOptions:{
            expiresIn:'3d',
           }
          }
      }
    }),
    MongooseModule.forFeature([{
      name:"Signup",
      schema:SignupSchema
    }])
  ],
  controllers: [LoginController],
  providers: [LoginService]
})
export class LoginModule {}
