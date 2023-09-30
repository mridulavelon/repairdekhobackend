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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelsSchema = exports.Models = exports.displayObj = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let displayObj = class displayObj {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], displayObj.prototype, "local", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], displayObj.prototype, "branded", void 0);
displayObj = __decorate([
    (0, mongoose_1.Schema)()
], displayObj);
exports.displayObj = displayObj;
let Models = class Models {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Models.prototype, "brand", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Models.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Models.prototype, "modelname", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Models.prototype, "touch", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: displayObj }),
    __metadata("design:type", displayObj)
], Models.prototype, "display", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Models.prototype, "battery", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Models.prototype, "charging", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Models.prototype, "backpanel", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Models.prototype, "tempered", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Models.prototype, "speaker", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Models.prototype, "dialer", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Models.prototype, "others", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Models.prototype, "modelimagelink", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Models.prototype, "smallimagelink", void 0);
Models = __decorate([
    (0, mongoose_1.Schema)()
], Models);
exports.Models = Models;
exports.ModelsSchema = mongoose_1.SchemaFactory.createForClass(Models);
//# sourceMappingURL=models.model.js.map