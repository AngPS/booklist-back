import { ObjectType, Field, ID } from '@nestjs/graphql';
import { CreateUserDto } from './create-user.dto';
import { CreateBookDto, FindBookDto } from 'src/Books/dto/create-Book.dto';

@ObjectType()
export class CreateStatusDto {
    @Field(() => ID, { nullable: true})
    readonly _id: string;
    @Field(type => CreateBookDto, { nullable: true})
    readonly bookID: CreateBookDto;
    @Field({ nullable: true })
    readonly status: string;
}

@ObjectType()
export class QueryStatusDto{
    @Field(() => ID, { nullable: true})
    readonly _id: string;
    @Field(type => FindBookDto, { nullable: true})
    readonly bookID: FindBookDto;
    @Field({ nullable: true })
    readonly status: string;
}
