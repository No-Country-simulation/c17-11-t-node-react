import { CaretakerService } from '@Caretaker/caretaker.service';
import { PRINCIPAL_PATHS } from '@Constants/routes';
import { Roles } from '@Decorators/role.decorator';
import { ReviewsService } from '@Reviews/reviews.service';
import {
  Controller,
  Delete,
  InternalServerErrorException,
  NotFoundException,
  Param,
} from '@nestjs/common';

@Controller({
  version: '1',
  path: PRINCIPAL_PATHS.REVIEW,
})
export class DeleteController {
  constructor(
    private reviewsService: ReviewsService,
    private caretakerService: CaretakerService,
  ) {}

  @Roles('owner', 'admin')
  @Delete(':id')
  async deleteReview(@Param('id') id: string) {
    try {
      const foundReview = await this.reviewsService.findOneById(id);
      if (foundReview == null) throw new Error('null');

      const caretaker = await this.caretakerService.findById(
        foundReview.caretaker['_id'],
      );
      const review = await this.reviewsService.delete(id);

      const sumPoint = caretaker.sumPoint - foundReview.stars;
      const avgStars = Math.abs(sumPoint / (caretaker.reviews - 1));
      await this.caretakerService.update(caretaker.user['_id'], {
        sumPoint: Number(sumPoint.toFixed(2)),
        stars: Number(avgStars.toFixed(2)),
        reviews: caretaker.reviews - 1,
      });

      return {
        success: true,
        data: review,
      };
    } catch (error) {
      if (error instanceof Error) {
        if (error.message == 'null') {
          throw new NotFoundException({
            success: false,
            message: 'Review not found',
          });
        }
      }
      throw new InternalServerErrorException({
        success: false,
        message: String(error),
      });
    }
  }
}
