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