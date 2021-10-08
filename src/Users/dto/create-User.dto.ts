import { ObjectType, Field, ID } from '@nestjs/graphql';
import { isNullableType } from 'graphql';
import { Status } from '../schemas/statuses.schema';


@ObjectType()
export class CreateUserDto {
    @Field(() => ID, { nullable: true })
    readonly _id: string;
    @Field({ nullable: true })
    readonly name: string;
    @Field({ nullable: true })
    readonly statusID?: string;
}