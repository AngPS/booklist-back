import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-Book.dto';
import { BookInput } from './inputs/book.input';

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

    @Mutation(() => CreateBookDto)
    async createBook(@Args('input') input: BookInput) {
        return this.booksService.create(input);
    }
}