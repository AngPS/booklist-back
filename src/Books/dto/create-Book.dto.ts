import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class CreateBookDto {
    @Field(() => ID)
    readonly _id: string;
    @Field()
    readonly title: string;
    @Field()
    readonly author: string;
    @Field()
    readonly summary: string;
}

@ObjectType()
export class FindBookDto {
    @Field(() => ID, { nullable: true })
    readonly _id: string;
    @Field({ nullable: true })
    readonly title: string;
    @Field({ nullable: true })
    readonly author: string;
    @Field({ nullable: true })
    readonly summary: string;
}