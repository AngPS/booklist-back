import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class CreateStatusDto {
    @Field(() => ID)
    readonly _id: string;
    @Field()
    readonly userID: string;
    @Field()
    readonly bookID: string;
    @Field()
    readonly status: string;
}