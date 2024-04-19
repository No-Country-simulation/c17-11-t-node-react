import { CaretakerService } from '@Caretaker/caretaker.service';
import { PRINCIPAL_PATHS } from '@Constants/routes';
import { Roles } from '@Decorators/role.decorator';
import { UpdateReviewDTO } from '@Reviews/dto/review.dto';
import { ReviewsService } from '@Reviews/reviews.service';
import {
  Body,
  Controller,
  InternalServerErrorException,
  NotFoundException,
  Param,
  Patch,
} from '@nestjs/common';

@Controller({
  version: '1',
  path: PRINCIPAL_PATHS.REVIEW,
})
export class UpdateController {
  constructor(
    private reviewsService: ReviewsService,
    private caretakerService: CaretakerService,
  ) {}

  @Roles('owner')
  @Patch(':id')
  async update(@Body() data: UpdateReviewDTO, @Param('id') id: string) {
    const { stars, description } = data;
    try {
      const foundReview = await this.reviewsService.findOneById(id);
      if (foundReview == null) throw new Error('null');

      if (stars) {
        const foundCaretaker = await this.caretakerService.findById(
          foundReview.caretaker['_id'],
        );
        const review = await this.reviewsService.update(id, {
          stars,
          description,
          updateAt: new Date(),
        });
        const sumPoint = foundCaretaker.sumPoint - foundReview.stars + stars;
        const avgStars = sumPoint / foundCaretaker.reviews;
        await this.caretakerService.update(foundCaretaker._id.toString(), {
          sumPoint,
          stars: avgStars,
        });

        return {
          success: true,
          data: review,
        };
      }

      const review = await this.reviewsService.update(id, {
        description,
        updateAt: new Date(),
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
