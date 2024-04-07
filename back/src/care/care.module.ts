import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Care, CareSchema } from './schemas/care.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Care.name, schema: CareSchema }]),
  ],
})
export class CareModule {}
