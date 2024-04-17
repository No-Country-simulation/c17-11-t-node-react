import {
  Controller,
  Get,
  InternalServerErrorException,
  NotFoundException,
  Param,
} from '@nestjs/common';
import { PRINCIPAL_PATHS } from '@Constants/routes';
import { PetService } from '@Pet/pet.service';
import { Public } from '@Decorators/public-access.decorator';

@Controller({
  version: '1',
  path: PRINCIPAL_PATHS.PET,
})
export class GettersController {
  constructor(private petService: PetService) {}

  @Public()
  @Get()
  async getAll() {
    try {
      const pets = await this.petService.findAll();
      return {
        success: true,
        data: pets,
      };
    } catch (error) {
      throw new InternalServerErrorException({
        success: false,
        message: String(error),
      });
    }
  }

  @Public()
  @Get(':id')
  async getById(@Param('id') id: string) {
    try {
      const pet = await this.petService.findById(id);
      if (!pet) {
        throw new NotFoundException('Pet not found');
      }
      return {
        success: true,
        data: pet,
      };
    } catch (error) {
      throw new InternalServerErrorException({
        success: false,
        message: String(error),
      });
    }
  }
}
