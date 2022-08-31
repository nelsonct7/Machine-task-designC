import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TodoModule } from './todo/todo.module'; 

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/tododata'),
    GraphQLModule.forRoot<ApolloDriverConfig>({driver: ApolloDriver,autoSchemaFile: true}),
    TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
