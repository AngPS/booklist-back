import { FilterQuery, Model, mongo, Types } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/users.schema';
import { CreateUserStatusInput, UserFindInput, UserInput } from './inputs/user.input';
import { BooksService } from 'src/Books/books.service';
import { StatusService } from './statuses.service';


@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private UserModel: Model<UserDocument>,
    private readonly bookService: BooksService,
    private readonly statusService: StatusService,

    ) {}

  async create(createUserDto: UserInput): Promise<User> {
    const createdUser = new this.UserModel(createUserDto);
    return (await createdUser.save()).populate('status');
  }

  async findUserbyName({ name }: UserFindInput): Promise<User>{
    console.log(name)
    return (await this.UserModel.findOne({ name })).populate('status');
  }

  async findAll(): Promise<User[]> {
    return this.UserModel.find().populate('status');
  }

  async addStatus({ userID, bookID }: CreateUserStatusInput): Promise<User>{
    const user = await this.UserModel.findById(userID);
    const status = await this.statusService.create({ bookID: bookID })
    user.status.push(status);
    await user.save()
    await user.populate('status');
    return user;
  }

  async deleteUserStatus({ userID, statusID }){
    const i = new Types.ObjectId(statusID);
    await this.statusService.deleteStatus(statusID);
    const stat = await this.statusService.findByStatusID(statusID)
    console.log (stat)
    console.log(i);
    const user = await this.UserModel.findByIdAndUpdate(
      { _id: userID },
      { $pull: { status: { _id: i } } },
      { 'new': true },
      );
    console.log(user)
    await this.statusService.deleteStatus(statusID);
    return (await user.save()).populate('status');

  }
}