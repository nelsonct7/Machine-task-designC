import { ObjectType,Field,Int,ID } from "@nestjs/graphql";
import {IsString} from 'class-validator';
@ObjectType()
export class TodoType{
    @Field (()=>ID)
    @IsString()
    readonly id?:string;
    @Field ()
    @IsString()
    readonly text:string;
    @Field ()
    @IsString()
    readonly status:string;
}