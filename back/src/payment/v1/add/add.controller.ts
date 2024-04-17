import { PRINCIPAL_PATHS } from '@Constants/routes';
import { Public } from '@Decorators/public-access.decorator';
// import { Roles } from '@Decorators/role.decorator';
import { CreatePaymentDTO } from '@Payment/dto/payment.dto';
import { PaymentService } from '@Payment/payment.service';
import {
  Body,
  Controller,
  Post,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';

@Controller({
  version: '1',
  path: PRINCIPAL_PATHS.PAYMENT,
})
export class AddController {
  constructor(private paymentService: PaymentService) {}

  @Public()
  // @Roles('admin')
  @Post()
  async addPayment(@Body() data: CreatePaymentDTO) {
    const { ...body } = data;

    if (
      body.status.toLowerCase() != 'pagado' &&
      body.status.toLowerCase() != 'pendiente'
    ) {
      throw new Error('Invalid_status');
    }
    if (body.status.toLowerCase() == 'pagado') body.payment_date = new Date();

    body.status = body.status.toLowerCase();

    try {
      const payment = await this.paymentService.create({
        ...body,
        date: new Date(),
      });

      return {
        success: true,
        data: payment,
      };
    } catch (error) {
      if (error instanceof Error) {
        if (error.message == 'Invalid_status') {
          throw new BadRequestException({
            success: false,
            message: 'Invalid Status!',
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
