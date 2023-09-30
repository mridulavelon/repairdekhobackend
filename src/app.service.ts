import { Injectable} from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer/dist/mailer.service';


@Injectable()
export class AppService {
  constructor(){}
  getHello(): string {
    return 'Nestjs server running';
  }

}
