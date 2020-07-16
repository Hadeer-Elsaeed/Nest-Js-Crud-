import { Controller , Get ,Post ,Put , Delete ,Body, Req, Res,Param} from '@nestjs/common';
import {CreateItem} from './dto/create-item.dto';
import {Request , Response, response} from 'express'
import { StringDecoder } from 'string_decoder';
import {ItemsService} from './items.service'
import {Item} from './interfaces/item.interface'


@Controller('items')
export class ItemsController {
    constructor(private ItemsService:ItemsService){}



    // @Get()
    // findAll(@Req() request:Request , @Res() response:Response):Response{
    //     console.log(request.url);
    //    return response.send('Hello World!!!');
    // }


    // @Get(':id')
    // findOne(@Param('id') id):String{
    //     return `item: ${id}`;
    // }

    @Get()
    findAll():Promise<Item[]>{
       return  this.ItemsService.findAll();
    }


    @Get(':id')
    findOne(@Param('id') id):Promise<Item>{
        return  this.ItemsService.findOne(id);
    }

    @Post()
    create(@Body() CreateItem:CreateItem):Promise<Item>{
        return this.ItemsService.create(CreateItem);
    }

    @Delete(':id')
    delete(@Param('id') id):Promise<Item>{
        return this.ItemsService.delete(id);
    }

    @Put(':id')
    update(@Body() UpdateItem:CreateItem,@Param('id') id):Promise<Item>{
        return this.ItemsService.update(id ,UpdateItem);
    }
}
