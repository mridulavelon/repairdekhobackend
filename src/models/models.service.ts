import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ModelsModel } from './models.model';
import { Model } from 'mongoose';
import { modelsdto,getmodelsdto, deleteModelDto, upateModelDto } from './models.dto';
import { error } from 'console';

@Injectable()
export class ModelsService {
    constructor(
        @InjectModel("Models") private modelsModel:Model<ModelsModel>
    ){}

    async createmodel(modelimagelink:any,smallimagelink:any,model:modelsdto){
        const newModel = new this.modelsModel({
             brand:model.brand,
             modelname:model.modelname,
             type:model.type,
             touch:model.touch,
             display:model.display,
             battery:model.battery,
             charging:model.charging,
             backpanel:model.backpanel,
             tempered:model.tempered,
             speaker:model.speaker,
             dialer:model.dialer,
             others:model.others,
             modelimagelink:modelimagelink,
             smallimagelink:smallimagelink
        })
        try {
           const created =  await newModel.save().then(() => {
                return {success:true,response:"Successfully model created"}
            }).catch((error) => {
                return {success:false,error:error.message}
            })
            return created;
          }
          catch(error){
               throw new HttpException(`${error}`,404)
          }
    }

    async deleteModel(deleteModel : deleteModelDto){
        const { id }  =  deleteModel;
        const deleted = await this.modelsModel.deleteOne({ _id: id }).then(() => {
         return {success:true,response:"Successfully deleted model"}
        }).catch((error) => {
          return {success:false,error:"Something went wrong"} 
        })
        return deleted;
    }

    async updateModel(modelimagelink:any,smallimagelink:any,updateModel:upateModelDto){
        const { id }  =  updateModel;
        const _id = id;
        const model = await this.modelsModel.findOne({ _id });
        const updateModelObj = updateModel;
        if(model){
            try{
                await this.modelsModel.findByIdAndUpdate({_id:id},{smallimagelink : smallimagelink});
                await this.modelsModel.findByIdAndUpdate({_id:id},{modelimagelink : modelimagelink}); 
                for(const property in updateModelObj){
                        if(property === "type"){
                            await this.modelsModel.findByIdAndUpdate({_id:id},{type:updateModel[property]});
                        }else if(property === "modelname"){
                            await this.modelsModel.findByIdAndUpdate({_id:id},{modelname:updateModel[property]});
                        }else if(property === "touch"){
                            await this.modelsModel.findByIdAndUpdate({_id:id},{touch:updateModel[property]});
                        }else if(property === "display"){
                            await this.modelsModel.findByIdAndUpdate({_id:id},{display:updateModel[property]});
                        }else if(property === "battery"){
                            await this.modelsModel.findByIdAndUpdate({_id:id},{battery:updateModel[property]});
                        }else if(property === "backpanel"){
                            await this.modelsModel.findByIdAndUpdate({_id:id},{backpanel:updateModel[property]});
                        }else if(property === "tempered"){
                            await this.modelsModel.findByIdAndUpdate({_id:id},{tempered:updateModel[property]});
                        }else if(property === "speaker"){
                            await this.modelsModel.findByIdAndUpdate({_id:id},{speaker:updateModel[property]});
                        }else if(property === "dialer"){
                            await this.modelsModel.findByIdAndUpdate({_id:id},{dialer:updateModelObj[property]});
                        }
                }
                return {success:true,response:"Successfully Updated Model"}
            }catch(error){
                return {success:false,error:error}
            } 
        }else{
            return {success:false,error:"No models found"}
        }
    }

    async getmodels(getmodel:getmodelsdto){
        const { brand,type } = getmodel;

        const models = await this.modelsModel.find({ brand,type });

        if(models){
            return {
                message:'Success',
                models:models
            }
         }else{
            return {
                message:error
            }
         }
    }
}
