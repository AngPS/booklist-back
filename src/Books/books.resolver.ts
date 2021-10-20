import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BooksService } from './books.service';
import { CreateBookDto, FindBookDto } from './dto/create-Book.dto';
import { BookFindInput, BookInput } from './inputs/book.input';

@Resolver()
export class BooksResolver {
    constructor(
        private readonly booksService: BooksService,
    ) {}


    @Query(() => String)
    async hello() {
        return 'hello';
    }

    @Query(() => [CreateBookDto])
    async books() {
        return this.booksService.findAll();
    }

    @Query(() => FindBookDto, { nullable: true })
    async findBookByTitle(@Args('input') input: BookFindInput) {
        return this.booksService.findBookbyName(input);
    }

    @Mutation(() => CreateBookDto)
    async createBook(@Args('input') input: BookInput) {
        return this.booksService.create(input);
    }
}