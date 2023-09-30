import { Body,Controller, Get, Post } from '@nestjs/common';
import { ordersdto } from './orders.dto';
import { OrdersService } from './orders.service';
import { getuserorderdto } from './orders.dto';

@Controller('orders')
export class OrdersController {
    constructor(
       private readonly  orderservice:OrdersService
    ){}
    @Post('/createorder')
    createorder(@Body() ordersdto:ordersdto){
        return  this.orderservice.createuserorder(ordersdto)
    }

    @Post('/getuserorders')
    getuserorders(@Body() getuserorderdto:getuserorderdto){
        return this.orderservice.getuserorders(getuserorderdto)
    }
    @Get('/getorders')
    getorders(){
        return this.orderservice.getorders();
    }
}
