import { Module } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Review, ReviewSchema } from './schemas/review.schema';
import { MongooseService } from '@Helpers/mongoose/mongoose.service';

@Module({
  providers: [ReviewsService, MongooseService],
  imports: [
    MongooseModule.forFeature([{ name: Review.name, schema: ReviewSchema }]),
  ],
})
export class ReviewsModule {}
