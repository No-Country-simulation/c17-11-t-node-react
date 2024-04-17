import {
  BadRequestException,
  Body,
  Controller,
  InternalServerErrorException,
  Param,
  Patch,
  Req,
} from '@nestjs/common';
import { PRINCIPAL_PATHS } from '@Constants/routes';
import { PetService } from '@Pet/pet.service';
import { RoleService } from '@Role/role.service';
import { UpdatePetDTO } from '@Pet/dto/pet.dto';
import { Request } from 'express';

@Controller({
  version: '1',
  path: PRINCIPAL_PATHS.PET,
})
export class UpdateController {
  constructor(
    private readonly petService: PetService,
    private readonly roleService: RoleService,
  ) {}

  @Patch(':id')
  async updatePet(
    @Param('id') petId: string,
    @Body() data: UpdatePetDTO,
    @Req() req: Request,
  ) {
    try {
      const roleId = req.user['roleId'];
      const role = await this.roleService.findById(roleId);
      if (role.name !== 'admin') {
        throw new Error('no_user');
      }

      const updatedPet = await this.petService.update(petId, data);

      return {
        success: true,
        data: updatedPet,
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
