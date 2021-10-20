import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateUserStatusInput, DeleteUserStatusInput, UserFindInput, UserInput } from './inputs/user.input';
import { User } from './schemas/users.schema';

@Resolver()
export class UsersResolver {
    constructor(
        private readonly usersService: UsersService,
    ) {}


    @Query(() => String)
    async hello() {
        return 'hello';
    }

    @Query(() => [CreateUserDto])
    async Users() {
        return this.usersService.findAll();
    }

    @Query(()=> CreateUserDto, { nullable: true })
    async findUser(@Args('input') input: UserFindInput){
        return this.usersService.findUserbyName(input);
    }

    @Mutation(() => CreateUserDto)
    async createUser(@Args('input') input: UserInput) {
        return this.usersService.create(input);
    }

    @Mutation(() => CreateUserDto)
    async addUserStatus(@Args('input') input: CreateUserStatusInput){
        return this.usersService.addStatus(input);
    }

    @Mutation(() => CreateUserDto)
    async deleteUserStatus(@Args('input') input: DeleteUserStatusInput){
        return this.usersService.deleteUserStatus(input)
    }
}