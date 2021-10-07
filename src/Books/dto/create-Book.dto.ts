import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class CreateBookDto {
    @Field(() => ID)
    readonly id: string;
    @Field()
    readonly title: string;
    @Field()
    readonly author: string;
    @Field()
    readonly summary: string;
}