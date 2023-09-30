import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SignupModule } from './signup/signup.module';
import { LoginModule } from './login/login.module';
import { ConfigModule } from '@nestjs/config';
import { ForgotpasswordModule } from './forgotpassword/forgotpassword.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { ResetpasswordModule } from './resetpassword/resetpassword.module';
import { OrdersModule } from './orders/orders.module';
import { AccountdetailsModule } from './accountdetails/accountdetails.module';
import { ModelsModule } from './models/models.module';
import { AdminModule } from './admin/admin.module';
import { BlogsModule } from './blogs/blogs.module';

@Module({
  imports: [
    ConfigModule.forRoot({ 
      envFilePath: '.env',
      isGlobal : true}),
    MongooseModule.forRoot('mongodb+srv://mridul:pAXVlWv1uxfiYbqn@cluster0.hzoosy1.mongodb.net/?retryWrites=true&w=majority', {
      dbName: 'test',
    }),
    MailerModule.forRoot({
      transport:{
        host:'ns27.interactivedns.com',
        port: 465,
        secure: true,
        auth:{
          user:'kgimis@techved.com',
          pass:'bt]JHkoG@0pd'
        }
      }
    }),
    SignupModule,
    LoginModule,
    ForgotpasswordModule,
    ResetpasswordModule,
    OrdersModule,
    AccountdetailsModule,
    ModelsModule,
    AdminModule,
    BlogsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
