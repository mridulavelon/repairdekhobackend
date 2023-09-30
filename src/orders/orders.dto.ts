export class ordersdto{
     readonly userid:string;
     readonly brand:string;
     readonly model:string;
     readonly display?:number;
     readonly battery?:number;
     readonly charging?:number;
     readonly backpanel?:number;
     readonly tempered?:number;
     readonly speaker?:number;
     readonly dialer?:number;
     readonly others?:number;
     readonly price:number;
     readonly total:number;
     readonly modelimagelink:string;
     readonly shippingaddress:object;
     readonly orderdate:string;
     readonly orderid:string;
}


export class getuserorderdto{
    readonly userid:string;
}