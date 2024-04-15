import { PRINCIPAL_PATHS } from '@Constants/routes';
import { PetService } from '@Pet/pet.service';
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
  path: PRINCIPAL_PATHS.PET,
})
export class DeleteController {
  constructor(
    private readonly petService: PetService,
    private readonly roleService: RoleService,
  ) {}

  @Delete(':id')
  async deletePet(@Param('id') petId: string, @Req() req: Request) {
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

      const deletedPet = await this.petService.delete(petId, userId);

      return {
        success: true,
        message: 'Pet deleted successfully',
        data: deletedPet,
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
