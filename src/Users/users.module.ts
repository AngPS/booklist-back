import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { Status, StatusSchema } from './schemas/statuses.schema';
import { User, UserSchema } from './schemas/users.schema';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';



@Module({
    imports: [
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
        MongooseModule.forFeature([{ name: Status.name, schema: StatusSchema }]),
    ], 
    providers: [UsersService, UsersResolver]
})
export class UsersModule {};