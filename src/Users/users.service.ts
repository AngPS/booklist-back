import { FilterQuery, Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/users.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UserFindInput, UserInput } from './inputs/user.input';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}

  async create(createUserDto: UserInput): Promise<User> {
    const createdUser = new this.UserModel(createUserDto);
    return createdUser.save();
  }

  async findUserbyName({ name, statusID }: UserFindInput): Promise<User>{
    console.log(name)
    return this.UserModel.findOne({ name }).exec();
  }

  async findAll(): Promise<User[]> {
    return this.UserModel.find().exec();
  }
}