import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Care, CareSchema } from './schemas/care.schema';
import { CareService } from './care.service';
import { AddController } from './v1/add/add.controller';
import { GettersController } from './v1/getters/getters.controller';
import { UpdateController } from './v1/update/update.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Care.name, schema: CareSchema }]),
  ],
  providers: [CareService],
  controllers: [AddController, GettersController, UpdateController],
})
export class CareModule {}
