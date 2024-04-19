import { CareService } from '@Care/care.service';
import { CreateCareDTO } from '@Care/dto/care.dto';
import { PRINCIPAL_PATHS } from '@Constants/routes';
import { Public } from '@Decorators/public-access.decorator';
import { RoleService } from '@Role/role.service';
import {
  BadRequestException,
  Body,
  Controller,
  InternalServerErrorException,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';

@Controller({
  version: '1',
  path: PRINCIPAL_PATHS.CARE,
})
export class AddController {
  constructor(
    private careService: CareService,
    private roleService: RoleService,
  ) {}

  @Public()
  @Post()
  async addCare(@Body() data: CreateCareDTO, @Req() req: Request) {
    try {
      const userId: string = req.user['userId'];
      const roleId = req.user['roleId'];
      const role = await this.roleService.findById(roleId);
      if (role.name !== 'admin' && role.name !== 'owner') {
        throw new Error('no_user');
      }

      const care = await this.careService.create(data, userId);

      return {
        success: true,
        data: care,
      };
    } catch (error) {
      if (error instanceof Error) {
        if (error.message == 'no_user') {
          throw new BadRequestException({
            success: false,
            message: 'User not provided',
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
