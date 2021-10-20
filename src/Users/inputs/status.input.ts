import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class StatusInput {
    @Field()
    readonly bookID: string;
    @Field({ nullable: true })
    readonly status?: string; 
}


@InputType()
export class StatusFindInput {
    @Field({ nullable: true })
    readonly statusID: string;
}

@InputType()
export class StatusUpdateInput{
    @Field()
    readonly statusID: string;
    @Field()
    readonly status: string;
}

@InputType()
export class StatusFindBookInput {
    @Field({ nullable: true })
    readonly bookID: string;
}
