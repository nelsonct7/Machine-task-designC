import { Query, Resolver,Mutation, Args } from '@nestjs/graphql';
import { TodoType } from './dto/create-todo.dto';
import { TodoInput } from './input-todos.input';
import { TodoService } from './todo.service';
@Resolver(of=>TodoType)
export class TodoResolver {
    constructor(
        private readonly todoService:TodoService
    ){}
    @Query(returns =>[TodoType])
    async todos():Promise<TodoType[]>{
        return this.todoService.findAll()
    }
    @Query(returns =>String)
    async hello():Promise<String>{
        return "Say Hello"
    }
    @Mutation(returns =>TodoType)
    async createTodo(@Args('todo') todo:TodoInput) : Promise<TodoType>{
        return this.todoService.create(todo)
    }
    @Mutation(returns =>TodoType)
    async updateTodo(@Args('id') id:String,@Args('todo') todo:TodoInput ) : Promise<TodoType>{
        return this.todoService.update(id,todo)
    }
    @Mutation(returns =>TodoType)
    async deleteTodo(@Args('id') id:String) : Promise<TodoType>{
        return this.todoService.delete(id)
    }
}
