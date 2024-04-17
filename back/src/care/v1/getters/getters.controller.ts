import { CareService } from '@Care/care.service';
import { PRINCIPAL_PATHS } from '@Constants/routes';
import { Roles } from '@Decorators/role.decorator';
// import { Public } from '@Decorators/public-access.decorator';
import {
  Controller,
  Get,
  InternalServerErrorException,
  NotFoundException,
  Param,
} from '@nestjs/common';

@Controller({
  version: '1',
  path: PRINCIPAL_PATHS.CARE,
})
export class GettersController {
  constructor(private careService: CareService) {}

  // @Public()
  @Roles('admin')
  @Get()
  async getAll() {
    try {
      const cares = await this.careService.findAll();

      return {
        success: true,
        data: cares,
      };
    } catch (error) {
      throw new InternalServerErrorException({
        success: false,
        message: String(error),
      });
    }
  }

  // @Public()
  @Roles('admin')
  @Roles('owner')
  @Get(':id')
  async getById(@Param('id') id: string) {
    try {
      const care = await this.careService.findById(id);
      if (!care) {
        throw new NotFoundException('Care not found');
      }
      return {
        success: true,
        data: care,
      };
    } catch (error) {
      throw new InternalServerErrorException({
        success: false,
        message: String(error),
      });
    }
  }
}
