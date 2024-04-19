import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateCareDTO {
  @IsString()
  caretaker: string;

  @IsString({ each: true })
  @MinLength(24, { each: true })
  @MaxLength(24, { each: true })
  services: string[];

  @IsString()
  pet: string;

  @IsNumber()
  hours: number;

  @IsString()
  status: string;

  @IsBoolean()
  state: boolean;

  @IsString()
  description?: string;

  @IsNumber()
  totalPrice: number;
}

export class UpdateCareDTO {
  @IsOptional()
  @IsString()
  caretaker?: string;

  @IsOptional()
  @IsString({ each: true })
  @MinLength(24, { each: true })
  @MaxLength(24, { each: true })
  services?: string[];

  @IsOptional()
  @IsString()
  pet?: string;

  @IsOptional()
  @IsNumber()
  hours?: number;

  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @IsBoolean()
  state?: boolean;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  totalPrice?: number;

  @IsOptional()
  date?: Date;
}
