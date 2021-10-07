import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { BooksResolver } from './books.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './books.schema';
import { BooksService } from './books.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }])],
    providers: [BooksResolver, BooksService]
})
export class BooksModule {};