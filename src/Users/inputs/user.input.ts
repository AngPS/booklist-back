import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UserInput {
    @Field()
    readonly name: string;
    @Field({ nullable: true })
    readonly statusID?: string;
}

@InputType()
export class UserFindInput {
    @Field(() => String, { nullable: true })
    readonly name?: string;
    @Field(() => [String], { nullable: true })
    readonly statusID?: string[];
}

@InputType()
export class UserUpdateInput {
    @Field(() => String)
    _id: string
    @Field(() => String, { nullable: true })
    readonly name?: string;
    @Field(() => [String], { nullable: true })
    readonly statusID?: string[];
}