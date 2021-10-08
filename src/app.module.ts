import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './Books/books.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './Users/users.module';

@Module({
  imports: [
    BooksModule,
    UsersModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    MongooseModule.forRoot('mongodb://localhost/mango'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
