import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Caretaker, CaretakerSchema } from './schemas/caretaker.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Caretaker.name, schema: CaretakerSchema },
    ]),
  ],
})
export class CaretakerModule {}
