import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoResolver } from './todo.resolver';
import { TodoService } from './todo.service';
import { TodoSchema } from './todo.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Todo', schema: TodoSchema }])],
  providers: [TodoService,TodoResolver]
})
export class TodoModule {}
