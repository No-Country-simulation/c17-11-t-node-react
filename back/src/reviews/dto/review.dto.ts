import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  MaxLength,
} from 'class-validator';

export class AddReviewDTO {
  @IsString()
  @Length(24, 24)
  @IsNotEmpty()
  caretaker: string;

  client: string;

  @IsString()
  @MaxLength(1000)
  description: string;

  @IsNumber()
  @IsNotEmpty()
  stars: number;
}

export class UpdateReviewDTO {
  @IsOptional()
  @IsString()
  @Length(24, 24)
  caretaker?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  description?: string;

  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  stars?: number;
}
