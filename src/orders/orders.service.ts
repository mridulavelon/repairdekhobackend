import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OrdersModel } from './orders.model';
import { ordersdto,getuserorderdto } from './orders.dto';
import { error } from 'console';


@Injectable()
export class OrdersService {
    constructor(
        @InjectModel("Orders") private ordersmodel:Model<OrdersModel>
    ){}

    async createuserorder(ordersdto:ordersdto){
        const userorder = ordersdto

         const neworder = new this.ordersmodel(userorder)

         try{
            await neworder.save()
            return {message:'Order created succesfully'}
         }catch(error){
            return error
         }
    }

    async getuserorders(getuserorderdto:getuserorderdto){
         const { userid } = getuserorderdto;

         const userorders = await this.ordersmodel.find({ userid })

         if(userorders){
            return {
                message:'Success',
                orders:userorders
            }
         }else{
            return {
                message:error
            }
         }
    }
    async getorders(){
        const orders = await this.ordersmodel.find({});

        if(orders){
           return {
               message:'Success',
               orders:orders
           }
        }else{
           return {
               message:error
           }
        }
    }
}
