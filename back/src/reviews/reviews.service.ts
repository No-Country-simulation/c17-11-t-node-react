import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Review, ReviewDocument } from './schemas/review.schema';
import { Model } from 'mongoose';
import { AddReviewDTO, UpdateReviewDTO } from './dto/review.dto';
import { MongooseService } from '@Helpers/mongoose/mongoose.service';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectModel(Review.name) private reviewModel: Model<Review>,
    private mongooseService: MongooseService,
  ) {}

  async findAll(): Promise<Review[]> {
    return this.reviewModel
      .find()
      .populate({ path: 'caretaker', select: 'stars reviews user' })
      .populate({ path: 'client', select: 'first_name last_name picture' })
      .exec();
  }

  async findOneById(id: string): Promise<ReviewDocument> {
    return this.reviewModel
      .findById(id)
      .populate({ path: 'caretaker', select: 'stars reviews user' })
      .populate({ path: 'client', select: 'first_name last_name picture' })
      .exec();
  }

  async add(data: AddReviewDTO): Promise<Review> {
    const { caretaker, client, ...req } = data;
    return this.reviewModel.create({
      caretaker: this.mongooseService.stringToObjectId(caretaker),
      client: this.mongooseService.stringToObjectId(client),
      ...req,
    });
  }

  async update(id: string, data: UpdateReviewDTO): Promise<Review> {
    const { caretaker, ...req } = data;
    return this.reviewModel
      .findByIdAndUpdate(
        id,
        {
          caretaker: this.mongooseService.stringToObjectId(caretaker),
          ...req,
        },
        {
          new: true,
        },
      )
      .exec();
  }

  async delete(id: string): Promise<Review> {
    return this.reviewModel.findByIdAndDelete(id).exec();
  }
}
