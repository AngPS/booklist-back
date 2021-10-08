import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class statusInput {
    @Field()
    readonly userID: string;
    @Field()
    readonly statusID: string;
}