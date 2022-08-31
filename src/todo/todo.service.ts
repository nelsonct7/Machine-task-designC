import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TodoType } from './dto/create-todo.dto';
import { TodoInput } from './input-todos.input';
import {Todo} from './interfaces/todo.interface';

@Injectable()
export class TodoService {
    constructor(
        @InjectModel('Todo') private todoModule:Model<Todo>
    ){}
    async create(createTodo:TodoInput):Promise<TodoType>{
        const createdTodo=new this.todoModule(createTodo);
        return await createdTodo.save() as any
    }
    async findAll():Promise<TodoType[]>{
        return await this.todoModule.find().lean();
    }
    async findOne(id:String):Promise<TodoType>{
        return await this.todoModule.findOne({_id:id});
    }
    async delete(id:String):Promise<TodoType>{
        return await this.todoModule.findByIdAndRemove(id);
    }
    async update(id:String,todo:TodoType):Promise<TodoType>{
        return await this.todoModule.findByIdAndUpdate(id,todo,{new:true});
    }

}
