export interface displayobj {
    local: number;
    branded: number;
    oled: number;
}
export declare class modelsdto {
    readonly brand: string;
    readonly type: string;
    readonly modelname: string;
    readonly touch?: number;
    readonly display?: displayobj;
    readonly battery?: number;
    readonly charging?: number;
    readonly backpanel?: number;
    readonly tempered?: number;
    readonly speaker?: number;
    readonly dialer?: number;
    readonly others?: number;
    readonly modelimagelink: string;
    readonly smallimagelink: string;
}
export declare class getmodelsdto {
    readonly brand: string;
    readonly type: string;
}
export declare class deleteModelDto {
    readonly id: string;
}
export declare class upateModelDto {
    readonly id: string;
    readonly brand?: string;
    readonly type?: string;
    readonly modelname?: string;
    readonly touch?: number;
    readonly display?: displayobj;
    readonly battery?: number;
    readonly charging?: number;
    readonly backpanel?: number;
    readonly tempered?: number;
    readonly speaker?: number;
    readonly dialer?: number;
    readonly others?: number;
    readonly modelimagelink?: string;
    readonly smallimagelink?: string;
    readonly modelImageUrl?: string;
    readonly smallImageUrl?: string;
}
