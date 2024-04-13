import { Controller, Get } from '@nestjs/common';
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
  findAll(): string {
    return 'This action returns all pet';
  }
}
