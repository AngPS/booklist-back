import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Book } from 'src/Books/schemas/books.schema';
import { User } from './users.schema';




export type StatusDocument = Status & Document;

@Schema()
export class Status {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Book.name })
  bookID: Book;

  @Prop({default: "Saved"})
  status: string;
}

export const StatusSchema = SchemaFactory.createForClass(Status);