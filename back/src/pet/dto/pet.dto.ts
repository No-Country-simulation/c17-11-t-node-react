import { IsString } from 'class-validator';

export class CreatePetDTO {
  @IsString()
  readonly name: string;
}

export class UpdatePetDTO {
  @IsString()
  readonly name?: string;
}
