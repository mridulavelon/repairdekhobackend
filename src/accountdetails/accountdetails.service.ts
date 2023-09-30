import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SignupModel } from 'src/signup/signup.model';
import { accountdetailsdto,getaccountdetaildto } from './accountdetails.dto';

@Injectable()
export class AccountdetailsService {
    constructor(
        @InjectModel("Signup") 
        private accountdetailsmodel:Model<SignupModel>,
    ){}

    async updateaccountdetails(accountdetailsdto:accountdetailsdto){
           const { userid } = accountdetailsdto
           let _id = userid
           let accountdetailsobject =  accountdetailsdto

           const user = this.accountdetailsmodel.findOne({ _id })

           if(!user){
            throw new BadRequestException("User account not found")
           }

           try{
           for(const property in accountdetailsobject){
             if(property === "email"){
                await this.accountdetailsmodel.findByIdAndUpdate({_id:_id},{email:accountdetailsobject[property]})
             }else if(property === "lastname"){
                await this.accountdetailsmodel.findByIdAndUpdate({_id:_id},{lastname:accountdetailsobject[property]})
             }else if(property === "firstname"){
                await this.accountdetailsmodel.findByIdAndUpdate({_id:_id},{firstname:accountdetailsobject[property]})
             }else if(property === "username"){
                await this.accountdetailsmodel.findByIdAndUpdate({_id:_id},{username:accountdetailsobject[property]})
             }else if(property === "billingaddress"){
               await this.accountdetailsmodel.findByIdAndUpdate({_id:_id},{ billingaddress: accountdetailsobject[property]  })
             }else if(property === "shippingaddress"){
                await this.accountdetailsmodel.findByIdAndUpdate({_id:_id},{ shippingaddress: accountdetailsobject[property]  })
             }                                     
           }
           return {
            "message":"Account updated successfully"
           }
          }catch(error){
            return {
                message:"error"
            }
          }

    }

    async getaccountdetails(getaccountdetaildto:getaccountdetaildto){
      const { userid } = getaccountdetaildto
      let _id = userid
      const user = await this.accountdetailsmodel.findOne({ _id })
      let userdata = {
        firstname:user.firstname,
        lastname:user.lastname,
        username:user.username,
        email:user.email,
        billingaddress:user.billingaddress && user.billingaddress,
        shippingaddress:user.shippingaddress && user.shippingaddress
      }
      return userdata
    }

    async getalluseraccounts(){
      const useraccounts = this.accountdetailsmodel.find()
      return useraccounts
    }
}
