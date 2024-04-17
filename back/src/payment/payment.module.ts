import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Payment, PaymentSchema } from './schemas/payment.schema';
import { PaymentService } from './payment.service';
import { AddController } from './v1/add/add.controller';
import { GettersController } from './v1/getters/getters.controller';
import { UpdateController } from './v1/update/update.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Payment.name, schema: PaymentSchema }]),
  ],
  providers: [PaymentService],
  controllers: [AddController, GettersController, UpdateController],
})
export class PaymentModule {}
