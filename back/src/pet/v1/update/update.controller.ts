import { Controller, Patch } from '@nestjs/common';
import { PRINCIPAL_PATHS } from '@Constants/routes';
import { Public } from '@Decorators/public-access.decorator';

@Controller({
  version: '1',
  path: PRINCIPAL_PATHS.PET,
})
export class UpdateController {
  @Public()
  @Patch()
  updatePet(): string {
    return 'actualizar pet';
  }
}
