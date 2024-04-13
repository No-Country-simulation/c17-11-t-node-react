import { PRINCIPAL_PATHS } from '@Constants/routes';
import { Public } from '@Decorators/public-access.decorator';
import { Controller, Post } from '@nestjs/common';

@Controller({
  version: '1',
  path: PRINCIPAL_PATHS.PET,
})
export class AddController {
  @Public()
  @Post()
  addPet(): string {
    return 'agregando pet';
  }
}
