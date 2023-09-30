export interface displayobj {
    local:number;
    branded:number;
    oled:number;
}
export class modelsdto{
    readonly brand:string;
    readonly type:string;
    readonly modelname:string;
    readonly touch?:number;
    readonly display?:displayobj;
    readonly battery?:number;
    readonly charging?:number;
    readonly backpanel?:number;
    readonly tempered?:number;
    readonly speaker?:number;
    readonly dialer?:number;
    readonly others?:number;
    readonly modelimagelink:string;
    readonly smallimagelink:string;
}

export class getmodelsdto{
    readonly brand:string;
    readonly type:string;
}
export class deleteModelDto{
    readonly id:string;
}

export class upateModelDto{
    readonly id:string;
    readonly brand?:string;
    readonly type?:string;
    readonly modelname?:string;
    readonly touch?:number;
    readonly display?:displayobj;
    readonly battery?:number;
    readonly charging?:number;
    readonly backpanel?:number;
    readonly tempered?:number;
    readonly speaker?:number;
    readonly dialer?:number;
    readonly others?:number;
    readonly modelimagelink?:string;
    readonly smallimagelink?:string;
    readonly modelImageUrl?:string;
    readonly smallImageUrl?:string;
}