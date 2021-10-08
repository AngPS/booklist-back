import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class BookInput {
    @Field()
    readonly title: string;
    @Field()
    readonly author: string;
    @Field()
    readonly summary: string;
}

@InputType()
export class BookFindInput {
    @Field({ nullable: true })
    readonly title: string;
    @Field({ nullable: true })
    readonly author: string;
    @Field({ nullable: true })
    readonly summary: string;
}