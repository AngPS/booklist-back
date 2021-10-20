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
}

@InputType()
export class CreateUserStatusInput {
    @Field(() => String, { nullable: true })
    readonly userID: string;
    @Field(() => String, { nullable: true })
    readonly bookID: string;
}

@InputType()
export class DeleteUserStatusInput {
    @Field()
    readonly userID: string;
    @Field()
    readonly statusID: string;
}

