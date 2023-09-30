export class accountdetailsdto{
    readonly userid:string;
    readonly firstname?:string;
    readonly lastname?:string;
    readonly email?:string;
    readonly username?:string;
    readonly shippingaddress?:string;
    readonly billingaddress?:string;
}

export class getaccountdetaildto{
   readonly userid:string;
}