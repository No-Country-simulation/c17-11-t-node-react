import { PRINCIPAL_PATHS } from '@Constants/routes';
import { CreatePetDTO } from '@Pet/dto/pet.dto';
import { PetService } from '@Pet/pet.service';
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
  path: PRINCIPAL_PATHS.PET,
})
export class AddController {
  constructor(
    private petService: PetService,
    private roleService: RoleService,
  ) {}
  @Post()
  async addPet(@Body() data: CreatePetDTO, @Req() req: Request) {
    try {
      const roleId = req.user['roleId'];
      const role = await this.roleService.findById(roleId);
      if (role.name !== 'admin') {
        throw new Error('no_user');
      }

      const pet = await this.petService.create(data);

      return {
        success: true,
        data: pet,
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
