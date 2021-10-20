import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Status } from '../schemas/statuses.schema';
import { QueryStatusDto } from './create-status.dto';


@ObjectType()
export class CreateUserDto {
    @Field(() => ID, { nullable: true })
    readonly _id: string;
    @Field({ nullable: true })
    readonly name: string;
    @Field(type => [QueryStatusDto], { nullable: true})
    readonly status?: Status[];
}
