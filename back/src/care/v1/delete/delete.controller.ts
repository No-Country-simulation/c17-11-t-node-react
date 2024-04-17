import { PRINCIPAL_PATHS } from '@Constants/routes';
import { CareService } from '@Care/care.service';
import { RoleService } from '@Role/role.service';
import {
  BadRequestException,
  Controller,
  Delete,
  InternalServerErrorException,
  Param,
  Req,
} from '@nestjs/common';
import { Request } from 'express';

@Controller({
  version: '1',
  path: PRINCIPAL_PATHS.CARE,
})
export class DeleteController {
  constructor(
    private readonly careService: CareService,
    private readonly roleService: RoleService,
  ) {}

  @Delete(':id')
  async deleteCare(@Param('id') careId: string, @Req() req: Request) {
    try {
      const roleId = req.user['roleId'];
      const role = await this.roleService.findById(roleId);
      if (role.name !== 'admin') {
        throw new Error('no_user');
      }

      const deleteCare = await this.careService.delete(careId);

      return {
        success: true,
        message: 'Care deleted successfully',
        data: deleteCare,
      };
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === 'no_user') {
          throw new BadRequestException({
            success: false,
            message: 'User not provided',
          });
        }
      }
      throw new InternalServerErrorException({
        success: false,
        message: 'Error deleting pet',
        error: error.message,
      });
    }
  }
}
