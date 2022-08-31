import * as mongoose from 'mongoose'

export const TodoSchema=new mongoose.Schema({
  text:String,
  status:String,
},
{ timestamps: true }
)