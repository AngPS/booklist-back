import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Book, BookSchema } from 'src/Books/schemas/books.schema';
import { User } from './users.schema';




export type StatusDocument = Status & Document;

@Schema()
export class Status {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  _user: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Book.name })
  Book: Book;

  @Prop()
  status: string;
}

export const StatusSchema = SchemaFactory.createForClass(Status);