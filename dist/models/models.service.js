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
exports.ModelsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const console_1 = require("console");
let ModelsService = class ModelsService {
    constructor(modelsModel) {
        this.modelsModel = modelsModel;
    }
    async createmodel(modelimagelink, smallimagelink, model) {
        const newModel = new this.modelsModel({
            brand: model.brand,
            modelname: model.modelname,
            type: model.type,
            touch: model.touch,
            display: model.display,
            battery: model.battery,
            charging: model.charging,
            backpanel: model.backpanel,
            tempered: model.tempered,
            speaker: model.speaker,
            dialer: model.dialer,
            others: model.others,
            modelimagelink: modelimagelink,
            smallimagelink: smallimagelink
        });
        try {
            const created = await newModel.save().then(() => {
                return { success: true, response: "Successfully model created" };
            }).catch((error) => {
                return { success: false, error: error.message };
            });
            return created;
        }
        catch (error) {
            throw new common_1.HttpException(`${error}`, 404);
        }
    }
    async deleteModel(deleteModel) {
        const { id } = deleteModel;
        const deleted = await this.modelsModel.deleteOne({ _id: id }).then(() => {
            return { success: true, response: "Successfully deleted model" };
        }).catch((error) => {
            return { success: false, error: "Something went wrong" };
        });
        return deleted;
    }
    async updateModel(modelimagelink, smallimagelink, updateModel) {
        const { id } = updateModel;
        const _id = id;
        const model = await this.modelsModel.findOne({ _id });
        const updateModelObj = updateModel;
        if (model) {
            try {
                await this.modelsModel.findByIdAndUpdate({ _id: id }, { smallimagelink: smallimagelink });
                await this.modelsModel.findByIdAndUpdate({ _id: id }, { modelimagelink: modelimagelink });
                for (const property in updateModelObj) {
                    if (property === "type") {
                        await this.modelsModel.findByIdAndUpdate({ _id: id }, { type: updateModel[property] });
                    }
                    else if (property === "modelname") {
                        await this.modelsModel.findByIdAndUpdate({ _id: id }, { modelname: updateModel[property] });
                    }
                    else if (property === "touch") {
                        await this.modelsModel.findByIdAndUpdate({ _id: id }, { touch: updateModel[property] });
                    }
                    else if (property === "display") {
                        await this.modelsModel.findByIdAndUpdate({ _id: id }, { display: updateModel[property] });
                    }
                    else if (property === "battery") {
                        await this.modelsModel.findByIdAndUpdate({ _id: id }, { battery: updateModel[property] });
                    }
                    else if (property === "backpanel") {
                        await this.modelsModel.findByIdAndUpdate({ _id: id }, { backpanel: updateModel[property] });
                    }
                    else if (property === "tempered") {
                        await this.modelsModel.findByIdAndUpdate({ _id: id }, { tempered: updateModel[property] });
                    }
                    else if (property === "speaker") {
                        await this.modelsModel.findByIdAndUpdate({ _id: id }, { speaker: updateModel[property] });
                    }
                    else if (property === "dialer") {
                        await this.modelsModel.findByIdAndUpdate({ _id: id }, { dialer: updateModelObj[property] });
                    }
                }
                return { success: true, response: "Successfully Updated Model" };
            }
            catch (error) {
                return { success: false, error: error };
            }
        }
        else {
            return { success: false, error: "No models found" };
        }
    }
    async getmodels(getmodel) {
        const { brand, type } = getmodel;
        const models = await this.modelsModel.find({ brand, type });
        if (models) {
            return {
                message: 'Success',
                models: models
            };
        }
        else {
            return {
                message: console_1.error
            };
        }
    }
};
ModelsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)("Models")),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ModelsService);
exports.ModelsService = ModelsService;
//# sourceMappingURL=models.service.js.map