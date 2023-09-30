"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelsController = void 0;
const common_1 = require("@nestjs/common");
const models_dto_1 = require("./models.dto");
const models_service_1 = require("./models.service");
const platform_express_1 = require("@nestjs/platform-express");
const firebase_1 = require("../firebase");
const storage_1 = require("firebase/storage");
const uuid_1 = require("uuid");
let ModelsController = class ModelsController {
    constructor(modelsService) {
        this.modelsService = modelsService;
    }
    async createmodel(files, modelDto) {
        const modelImageRef = (0, storage_1.ref)(firebase_1.storage, `models/bigimagelink/${modelDto.modelname}${(0, uuid_1.v4)()}`);
        const modelImageMetaType = { contentType: files.modelimagelink[0].mimetype, name: files.modelimagelink[0].originalname };
        const uploadModelImage = await (0, storage_1.uploadBytes)(modelImageRef, files.modelimagelink[0].buffer, modelImageMetaType).then(async (snapshot) => {
            const downloadModelImage = await (0, storage_1.getDownloadURL)(snapshot.ref).then((downloadURL) => {
                return downloadURL;
            });
            return downloadModelImage;
        }).catch((error) => {
            return { success: false, error: error.message ? error.message : "Something went wrong" };
        });
        const smallimageref = (0, storage_1.ref)(firebase_1.storage, `models/smallimagelink/${modelDto.modelname}${(0, uuid_1.v4)()}`);
        const smallImageMetaType = { contentType: files.smallimagelink[0].mimetype, name: files.modelimagelink[0].originalname };
        const uploadSmallImage = await (0, storage_1.uploadBytes)(smallimageref, files.modelimagelink[0].buffer, smallImageMetaType).then(async (snapshot) => {
            const downloadSmallImageUrl = await (0, storage_1.getDownloadURL)(snapshot.ref).then((downloadURL) => {
                return downloadURL;
            });
            return downloadSmallImageUrl;
        }).catch((error) => {
            return { success: false, error: error.message ? error.message : "Something went wrong" };
        });
        return this.modelsService.createmodel(uploadModelImage, uploadSmallImage, modelDto);
    }
    getmodels(getmodelsdto) {
        return this.modelsService.getmodels(getmodelsdto);
    }
    deletemodel(deletemodel) {
        return this.modelsService.deleteModel(deletemodel);
    }
    async updateModel(files, updateModel) {
        const urlParse = require('url').URL;
        let uploadModelImage;
        let uploadSmallImage;
        if (files.modelimagelink && files.smallimagelink) {
            const modeUrlPathObj = new urlParse(`${updateModel.modelImageUrl}`);
            const modelUrlPath = modeUrlPathObj.pathname.substring(modeUrlPathObj.pathname.lastIndexOf('/') + 1).replace(/%2F|%20|%20|%2B/g, '');
            const modelUrlPathRef = modelUrlPath.replace("models", "models/");
            const modelUrlRef = modelUrlPathRef.replace("bigimagelink", "bigimagelink/");
            const deleteModelUrlRef = (0, storage_1.ref)(firebase_1.storage, modelUrlRef);
            await (0, storage_1.deleteObject)(deleteModelUrlRef);
            const modelImageRef = (0, storage_1.ref)(firebase_1.storage, `models/bigimagelink/${updateModel.modelname}${(0, uuid_1.v4)()}`);
            const modelImageMetaType = { contentType: files.modelimagelink[0].mimetype, name: files.modelimagelink[0].originalname };
            uploadModelImage = await (0, storage_1.uploadBytes)(modelImageRef, files.modelimagelink[0].buffer, modelImageMetaType).then(async (snapshot) => {
                const downloadModelImage = await (0, storage_1.getDownloadURL)(snapshot.ref).then((downloadURL) => {
                    return downloadURL;
                });
                return downloadModelImage;
            }).catch((error) => {
                return { success: false, error: error.message ? error.message : "Something went wrong" };
            });
            const smallModelUrlPathObj = new urlParse(`${updateModel.smallImageUrl}`);
            const smallUrlPath = smallModelUrlPathObj.pathname.substring(smallModelUrlPathObj.pathname.lastIndexOf('/') + 1).replace(/%2F|%20|%20|%2B/g, '');
            const smallUrlPathRef = smallUrlPath.replace("models", "models/");
            const smallUrlRef = smallUrlPathRef.replace("smallimagelink", "smallimagelink/");
            const deleteSmallUrlRef = (0, storage_1.ref)(firebase_1.storage, smallUrlRef);
            await (0, storage_1.deleteObject)(deleteSmallUrlRef);
            const smallimageref = (0, storage_1.ref)(firebase_1.storage, `models/smallimagelink/${updateModel.modelname}${(0, uuid_1.v4)()}`);
            const smallImageMetaType = { contentType: files.smallimagelink[0].mimetype, name: files.modelimagelink[0].originalname };
            uploadSmallImage = await (0, storage_1.uploadBytes)(smallimageref, files.modelimagelink[0].buffer, smallImageMetaType).then(async (snapshot) => {
                const downloadSmallImageUrl = await (0, storage_1.getDownloadURL)(snapshot.ref).then((downloadURL) => {
                    return downloadURL;
                });
                return downloadSmallImageUrl;
            }).catch((error) => {
                return { success: false, error: error.message ? error.message : "Something went wrong" };
            });
        }
        else if (files.smallimagelink !== undefined && files.modelimagelink === undefined) {
            const smallModelUrlPathObj = new urlParse(`${updateModel.smallImageUrl}`);
            const smallUrlPath = smallModelUrlPathObj.pathname.substring(smallModelUrlPathObj.pathname.lastIndexOf('/') + 1).replace(/%2F|%20|%20|%2B/g, '');
            const smallUrlPathRef = smallUrlPath.replace("models", "models/");
            const smallUrlRef = smallUrlPathRef.replace("smallimagelink", "smallimagelink/");
            const deleteSmallUrlRef = (0, storage_1.ref)(firebase_1.storage, smallUrlRef);
            await (0, storage_1.deleteObject)(deleteSmallUrlRef);
            const smallimageref = (0, storage_1.ref)(firebase_1.storage, `models/smallimagelink/${updateModel.modelname}${(0, uuid_1.v4)()}`);
            const smallImageMetaType = { contentType: files.smallimagelink[0].mimetype, name: files.modelimagelink[0].originalname };
            uploadSmallImage = await (0, storage_1.uploadBytes)(smallimageref, files.modelimagelink[0].buffer, smallImageMetaType).then(async (snapshot) => {
                const downloadSmallImageUrl = await (0, storage_1.getDownloadURL)(snapshot.ref).then((downloadURL) => {
                    return downloadURL;
                });
                return downloadSmallImageUrl;
            }).catch((error) => {
                return { success: false, error: error.message ? error.message : "Something went wrong" };
            });
        }
        else if (files.modelimagelink !== undefined && files.smallimagelink === undefined) {
            const modeUrlPathObj = new urlParse(`${updateModel.modelImageUrl}`);
            const modelUrlPath = modeUrlPathObj.pathname.substring(modeUrlPathObj.pathname.lastIndexOf('/') + 1).replace(/%2F|%20|%20|%2B/g, '');
            const modelUrlPathRef = modelUrlPath.replace("models", "models/");
            const modelUrlRef = modelUrlPathRef.replace("bigimagelink", "bigimagelink/");
            const deleteModelUrlRef = (0, storage_1.ref)(firebase_1.storage, modelUrlRef);
            await (0, storage_1.deleteObject)(deleteModelUrlRef);
            const modelImageRef = (0, storage_1.ref)(firebase_1.storage, `models/bigimagelink/${updateModel.modelname}${(0, uuid_1.v4)()}`);
            const modelImageMetaType = { contentType: files.modelimagelink[0].mimetype, name: files.modelimagelink[0].originalname };
            uploadModelImage = await (0, storage_1.uploadBytes)(modelImageRef, files.modelimagelink[0].buffer, modelImageMetaType).then(async (snapshot) => {
                const downloadModelImage = await (0, storage_1.getDownloadURL)(snapshot.ref).then((downloadURL) => {
                    return downloadURL;
                });
                return downloadModelImage;
            }).catch((error) => {
                return { success: false, error: error.message ? error.message : "Something went wrong" };
            });
        }
        else {
            uploadModelImage = updateModel.modelImageUrl;
            uploadSmallImage = updateModel.smallImageUrl;
        }
        return this.modelsService.updateModel(uploadModelImage, uploadSmallImage, updateModel);
    }
};
__decorate([
    (0, common_1.Post)('/createmodel'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)(([
        { name: 'modelimagelink', maxCount: 1 },
        { name: 'smallimagelink', maxCount: 1 },
    ]))),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, models_dto_1.modelsdto]),
    __metadata("design:returntype", Promise)
], ModelsController.prototype, "createmodel", null);
__decorate([
    (0, common_1.Post)('/getmodels'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_dto_1.getmodelsdto]),
    __metadata("design:returntype", void 0)
], ModelsController.prototype, "getmodels", null);
__decorate([
    (0, common_1.Post)('/deletemodel'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_dto_1.deleteModelDto]),
    __metadata("design:returntype", void 0)
], ModelsController.prototype, "deletemodel", null);
__decorate([
    (0, common_1.Post)('/updatemodel'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)(([
        { name: 'modelimagelink', maxCount: 1 },
        { name: 'smallimagelink', maxCount: 1 },
    ]))),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, models_dto_1.upateModelDto]),
    __metadata("design:returntype", Promise)
], ModelsController.prototype, "updateModel", null);
ModelsController = __decorate([
    (0, common_1.Controller)('models'),
    __metadata("design:paramtypes", [models_service_1.ModelsService])
], ModelsController);
exports.ModelsController = ModelsController;
//# sourceMappingURL=models.controller.js.map