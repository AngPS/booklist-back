import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book, BookDocument } from './books.schema';
import { CreateBookDto } from './dto/create-Book.dto';
import { BookInput } from './inputs/book.input';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private BookModel: Model<BookDocument>) {}

  async create(createBookDto: BookInput): Promise<Book> {
    const createdBook = new this.BookModel(createBookDto);
    return createdBook.save();
  }

  async findAll(): Promise<Book[]> {
    return this.BookModel.find().exec();
  }
}
