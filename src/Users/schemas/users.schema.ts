import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Status, StatusSchema } from './statuses.schema';


export type UserDocument = User & Document;


@Schema()
export class User {
  @Prop()
  name: string;

  @Prop({type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Status" }], default: []})
  status: Status[];
}

export const UserSchema = SchemaFactory.createForClass(User);