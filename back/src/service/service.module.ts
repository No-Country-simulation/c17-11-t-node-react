import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Service, ServiceSchema } from './schemas/service.schema';
import { ServiceService } from './service.service';
import { ServicesController } from './v1/services/services.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Service.name, schema: ServiceSchema }]),
  ],
  providers: [ServiceService],
  controllers: [ServicesController],
})
export class ServiceModule {}
