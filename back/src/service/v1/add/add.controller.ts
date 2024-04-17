import { PRINCIPAL_PATHS } from '@Constants/routes';
import { Public } from '@Decorators/public-access.decorator';
// import { Roles } from '@Decorators/role.decorator';
import { CreateServiceDTO } from '@Service/dto/service.dto';
import { ServiceService } from '@Service/service.service';
import {
  Body,
  Controller,
  Post,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';

@Controller({
  version: '1',
  path: PRINCIPAL_PATHS.SERVICE,
})
export class AddController {
  constructor(private serviceService: ServiceService) {}

  @Public()
  //@Roles('admin')
  @Post()
  async addService(@Body() data: CreateServiceDTO) {
    const { ...body } = data;

    try {
      const service = await this.serviceService.create({
        ...body,
      });
      return {
        success: true,
        data: service,
      };
    } catch (error) {
      if (error instanceof Error) {
        if (error.message == 'no_service') {
          throw new BadRequestException({
            success: false,
            message: 'Service not provided',
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
