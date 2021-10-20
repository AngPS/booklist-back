import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from 'src/Books/books.module';
import { Status, StatusSchema } from './schemas/statuses.schema';
import { User, UserSchema } from './schemas/users.schema';
import { StatusResolver } from './statuses.resolver';
import { StatusService } from './statuses.service';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
    imports: [
        BooksModule,
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
        MongooseModule.forFeature([{ name: Status.name, schema: StatusSchema }]),
        
    ], 
    providers: [UsersService, UsersResolver, StatusService, StatusResolver]
})
export class UsersModule {};