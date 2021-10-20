import { FilterQuery, Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Status, StatusDocument } from './schemas/statuses.schema';
import { CreateStatusDto } from './dto/create-status.dto';
import { StatusInput, StatusUpdateInput } from './inputs/status.input';

@Injectable()
export class StatusService {
  constructor(@InjectModel(Status.name) private StatusModel: Model<StatusDocument>) {}

  async create(createStatusDto: StatusInput): Promise<Status> {
    const createdStatus = new this.StatusModel(createStatusDto);
    return (await createdStatus.save()).populate('bookID');
  }

  async findByStatusID({ statusID }):Promise<Status>{
    return this.StatusModel.findById(statusID);
  }

  async updateStatus({ statusID, status }):Promise<Status>{
    return this.StatusModel.findByIdAndUpdate(statusID, { status: status }).populate('bookID');
  }

  async deleteStatus({ statusID }):Promise<Status>{
    const res = await this.StatusModel.findByIdAndRemove(statusID);
    return res;
  }

  async findAll(): Promise<Status[]> {
    return this.StatusModel.find().populate('bookID');
  }

  async find({ bookID }): Promise<Status>{
    const res = await this.StatusModel.findOne({ bookID });
    return res.populate('bookID');
  }
}