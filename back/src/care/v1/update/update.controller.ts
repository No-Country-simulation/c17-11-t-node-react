import { CareService } from '@Care/care.service';
import { UpdateCareDTO } from '@Care/dto/care.dto';
import { PRINCIPAL_PATHS } from '@Constants/routes';
import { RoleService } from '@Role/role.service';
import {
  BadRequestException,
  Body,
  Controller,
  InternalServerErrorException,
  Patch,
  Req,
} from '@nestjs/common';
import { Request } from 'express';

@Controller({
  version: '1',
  path: PRINCIPAL_PATHS.CARE,
})
export class UpdateController {
  constructor(
    private careService: CareService,
    private roleService: RoleService,
  ) {}

  @Patch()
  async updateCare(@Body() data: UpdateCareDTO, @Req() req: Request) {
    try {
      const userId: string = req.user['userId'];
      const roleId = req.user['roleId'];
      const role = await this.roleService.findById(roleId);
      if (
        role.name !== 'admin' &&
        role.name !== 'owner' &&
        role.name !== 'caretaker'
      ) {
        throw new Error('no_user');
      }

      const care = await this.careService.update(data, userId);

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
