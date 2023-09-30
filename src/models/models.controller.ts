import { Body,Controller, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { modelsdto,getmodelsdto, deleteModelDto, upateModelDto } from './models.dto';
import { ModelsService } from './models.service';
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { storage } from 'src/firebase';
import { getDownloadURL, ref,uploadBytes,deleteObject } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';


@Controller('models')

export class ModelsController {
    constructor(
        private readonly modelsService:ModelsService
    ){}
    
    @Post('/createmodel')
    @UseInterceptors(FileFieldsInterceptor(([
        { name: 'modelimagelink', maxCount: 1 },
        { name: 'smallimagelink', maxCount: 1 },
      ])))
    async createmodel(@UploadedFiles()  files: { modelimagelink?: any, smallimagelink?: any },@Body() modelDto:modelsdto){
         const modelImageRef = ref(storage,`models/bigimagelink/${modelDto.modelname}${uuidv4()}`);
         const modelImageMetaType = { contentType: files.modelimagelink[0].mimetype, name: files.modelimagelink[0].originalname };
         const uploadModelImage = await uploadBytes(modelImageRef,files.modelimagelink[0].buffer,modelImageMetaType).then(async (snapshot) => {
         const downloadModelImage = await getDownloadURL(snapshot.ref).then((downloadURL) => {
          return downloadURL
         })
          return downloadModelImage  
         }).catch((error) => {
          return {success:false,error:error.message ? error.message : "Something went wrong"}
         })
        const smallimageref = ref(storage,`models/smallimagelink/${modelDto.modelname}${uuidv4()}`);
        const smallImageMetaType = { contentType: files.smallimagelink[0].mimetype, name: files.modelimagelink[0].originalname };
        const uploadSmallImage = await uploadBytes(smallimageref,files.modelimagelink[0].buffer,smallImageMetaType).then(async (snapshot) => {
        const downloadSmallImageUrl = await getDownloadURL(snapshot.ref).then((downloadURL) => {
         return downloadURL
         })
         return downloadSmallImageUrl
        }).catch((error) => {
            return {success:false,error:error.message ? error.message : "Something went wrong"}
        })
        return this.modelsService.createmodel(uploadModelImage,uploadSmallImage,modelDto)
    }

    @Post('/getmodels')
    getmodels(@Body() getmodelsdto:getmodelsdto){
        return this.modelsService.getmodels(getmodelsdto)
    }
    @Post('/deletemodel')
    deletemodel(@Body() deletemodel:deleteModelDto){
        return this.modelsService.deleteModel(deletemodel);
    }
    @Post('/updatemodel')
    @UseInterceptors(FileFieldsInterceptor(([
        { name: 'modelimagelink', maxCount: 1 },
        { name: 'smallimagelink', maxCount: 1 },
      ])))
    async updateModel(@UploadedFiles()  files: { modelimagelink?: any, smallimagelink?: any },@Body() updateModel:upateModelDto){
        const urlParse = require('url').URL;
        let uploadModelImage;
        let uploadSmallImage;
        if(files.modelimagelink && files.smallimagelink){
            const modeUrlPathObj = new urlParse(`${updateModel.modelImageUrl}`);
            const modelUrlPath = modeUrlPathObj.pathname.substring(modeUrlPathObj.pathname.lastIndexOf('/')+1).replace(/%2F|%20|%20|%2B/g, '');
            const modelUrlPathRef = modelUrlPath.replace("models","models/");
            const modelUrlRef = modelUrlPathRef.replace("bigimagelink","bigimagelink/")
            const deleteModelUrlRef = ref(storage,modelUrlRef);
            await deleteObject(deleteModelUrlRef);
            const modelImageRef = ref(storage,`models/bigimagelink/${updateModel.modelname}${uuidv4()}`);
            const modelImageMetaType = { contentType: files.modelimagelink[0].mimetype, name: files.modelimagelink[0].originalname };
            uploadModelImage = await uploadBytes(modelImageRef,files.modelimagelink[0].buffer,modelImageMetaType).then(async (snapshot) => {
            const downloadModelImage = await getDownloadURL(snapshot.ref).then((downloadURL) => {
             return downloadURL
            })
             return downloadModelImage  
            }).catch((error) => {
             return {success:false,error:error.message ? error.message : "Something went wrong"}
            })
            const smallModelUrlPathObj = new urlParse(`${updateModel.smallImageUrl}`);
            const smallUrlPath = smallModelUrlPathObj.pathname.substring(smallModelUrlPathObj.pathname.lastIndexOf('/')+1).replace(/%2F|%20|%20|%2B/g, '');
            const smallUrlPathRef = smallUrlPath.replace("models","models/");
            const smallUrlRef = smallUrlPathRef.replace("smallimagelink","smallimagelink/")
            const deleteSmallUrlRef = ref(storage,smallUrlRef);
            await deleteObject(deleteSmallUrlRef); 
            const smallimageref = ref(storage,`models/smallimagelink/${updateModel.modelname}${uuidv4()}`);
            const smallImageMetaType = { contentType: files.smallimagelink[0].mimetype, name: files.modelimagelink[0].originalname };
            uploadSmallImage = await uploadBytes(smallimageref,files.modelimagelink[0].buffer,smallImageMetaType).then(async (snapshot) => {
            const downloadSmallImageUrl = await getDownloadURL(snapshot.ref).then((downloadURL) => {
            return downloadURL
            })
            return downloadSmallImageUrl
           }).catch((error) => {
               return {success:false,error:error.message ? error.message : "Something went wrong"}
           })
        }
        else if(files.smallimagelink !== undefined && files.modelimagelink === undefined){
            const smallModelUrlPathObj = new urlParse(`${updateModel.smallImageUrl}`);
            const smallUrlPath = smallModelUrlPathObj.pathname.substring(smallModelUrlPathObj.pathname.lastIndexOf('/')+1).replace(/%2F|%20|%20|%2B/g, '');
            const smallUrlPathRef = smallUrlPath.replace("models","models/");
            const smallUrlRef = smallUrlPathRef.replace("smallimagelink","smallimagelink/")
            const deleteSmallUrlRef = ref(storage,smallUrlRef);
            await deleteObject(deleteSmallUrlRef); 
            const smallimageref = ref(storage,`models/smallimagelink/${updateModel.modelname}${uuidv4()}`);
            const smallImageMetaType = { contentType: files.smallimagelink[0].mimetype, name: files.modelimagelink[0].originalname };
            uploadSmallImage = await uploadBytes(smallimageref,files.modelimagelink[0].buffer,smallImageMetaType).then(async (snapshot) => {
            const downloadSmallImageUrl = await getDownloadURL(snapshot.ref).then((downloadURL) => {
            return downloadURL
            })
            return downloadSmallImageUrl
           }).catch((error) => {
               return {success:false,error:error.message ? error.message : "Something went wrong"}
           })
        }else if(files.modelimagelink !== undefined && files.smallimagelink === undefined){
            const modeUrlPathObj = new urlParse(`${updateModel.modelImageUrl}`);
            const modelUrlPath = modeUrlPathObj.pathname.substring(modeUrlPathObj.pathname.lastIndexOf('/')+1).replace(/%2F|%20|%20|%2B/g, '');
            const modelUrlPathRef = modelUrlPath.replace("models","models/");
            const modelUrlRef = modelUrlPathRef.replace("bigimagelink","bigimagelink/")
            const deleteModelUrlRef = ref(storage,modelUrlRef);
            await deleteObject(deleteModelUrlRef);
            const modelImageRef = ref(storage,`models/bigimagelink/${updateModel.modelname}${uuidv4()}`);
            const modelImageMetaType = { contentType: files.modelimagelink[0].mimetype, name: files.modelimagelink[0].originalname };
            uploadModelImage = await uploadBytes(modelImageRef,files.modelimagelink[0].buffer,modelImageMetaType).then(async (snapshot) => {
            const downloadModelImage = await getDownloadURL(snapshot.ref).then((downloadURL) => {
             return downloadURL
            })
             return downloadModelImage  
            }).catch((error) => {
             return {success:false,error:error.message ? error.message : "Something went wrong"}
            })
        }else{
            uploadModelImage = updateModel.modelImageUrl;
            uploadSmallImage = updateModel.smallImageUrl;        
        }
       return this.modelsService.updateModel(uploadModelImage,uploadSmallImage,updateModel);
    }
}


