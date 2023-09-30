/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { modelsdto, getmodelsdto, deleteModelDto, upateModelDto } from './models.dto';
import { ModelsService } from './models.service';
export declare class ModelsController {
    private readonly modelsService;
    constructor(modelsService: ModelsService);
    createmodel(files: {
        modelimagelink?: any;
        smallimagelink?: any;
    }, modelDto: modelsdto): Promise<{
        success: boolean;
        response: string;
    } | {
        success: boolean;
        error: any;
    }>;
    getmodels(getmodelsdto: getmodelsdto): Promise<{
        message: string;
        models: (import("./models.model").Models & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    } | {
        message: {
            (...data: any[]): void;
            (message?: any, ...optionalParams: any[]): void;
        };
        models?: undefined;
    }>;
    deletemodel(deletemodel: deleteModelDto): Promise<{
        success: boolean;
        response: string;
    } | {
        success: boolean;
        error: string;
    }>;
    updateModel(files: {
        modelimagelink?: any;
        smallimagelink?: any;
    }, updateModel: upateModelDto): Promise<{
        success: boolean;
        response: string;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        response?: undefined;
    }>;
}
