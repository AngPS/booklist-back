import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book, BookDocument } from './schemas/books.schema';
import { CreateBookDto } from './dto/create-Book.dto';
import { BookFindInput, BookInput } from './inputs/book.input';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private BookModel: Model<BookDocument>) {}

  async create(createBookDto: BookInput): Promise<Book> {
    const createdBook = new this.BookModel(createBookDto);
    return createdBook.save();
  }

  async findBookbyName({ title }: BookFindInput): Promise<Book>{
    return this.BookModel.findOne({ title }).exec();
  }

  async findAll(): Promise<Book[]> {
    return this.BookModel.find().exec();
  }
}
