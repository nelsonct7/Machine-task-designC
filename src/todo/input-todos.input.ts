import {InputType, Field, Int} from '@nestjs/graphql'

@InputType()
export class TodoInput {
  @Field()
  readonly text: string
   @Field()
  readonly status: string
}