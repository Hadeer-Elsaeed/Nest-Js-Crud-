import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {
    constructor(@InjectModel('Item') private ItemModel: Model<Item>){}

    async create(item: Item ): Promise<Item> {
        const createdItem = new this.ItemModel(item);
        return await createdItem.save();
      }
    
    async findAll(): Promise<Item[]> {
        return  await this.ItemModel.find().exec();
      }


    async findOne(id:string): Promise<Item>{
        return  await this.ItemModel.findOne({_id:id})
    }

    async delete(id:string):Promise<Item>{
      return await this.ItemModel.findByIdAndRemove(id);
    }

    async update(id:string , item:Item):Promise<Item>{
      return await this.ItemModel.findByIdAndUpdate(id,item,{new:true});
    }

}
