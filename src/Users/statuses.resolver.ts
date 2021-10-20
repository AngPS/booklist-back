import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { StatusService } from './statuses.service';
import { CreateStatusDto, QueryStatusDto } from './dto/create-Status.dto';
import { StatusUpdateInput, StatusInput, StatusFindInput, StatusFindBookInput } from './inputs/status.input';
import { Status } from './schemas/statuses.schema';

@Resolver()
export class StatusResolver {
    constructor(
        private readonly StatusService: StatusService,
    ) {}


    @Query(() => String)
    async hello() {
        return 'hello';
    }

    @Query(() => [CreateStatusDto])
    async Status() {
        return this.StatusService.findAll();
    }

    @Query(() => CreateStatusDto)
    async findStatus(@Args('input') input: StatusFindInput){
        return this.StatusService.findByStatusID(input)
    }

    @Query(() => CreateStatusDto)
    async findByBookID(@Args('input') input: StatusFindBookInput){
        return this.StatusService.find(input)
    }
 
    @Mutation(() => CreateStatusDto)
    async createStatus(@Args('input') input: StatusInput) {
        return this.StatusService.create(input);
    }

    @Mutation(()=> CreateStatusDto)
    async updateStatus(@Args('input') input: StatusUpdateInput){
        return this.StatusService.updateStatus(input);
    }

    @Mutation(()=> CreateStatusDto)
    async deleteStatus(@Args('input') input: StatusFindInput){
        return this.StatusService.deleteStatus(input);
    }


}