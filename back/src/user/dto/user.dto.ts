import { IsPassword } from '@Decorators/password.decorator';
import {
  IsArray,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
  ValidateNested,
} from 'class-validator';

export class CreateUserDTO {
  role?: string;

  @IsArray()
  @IsOptional()
  pet?: string[];

  @IsString()
  @IsNotEmpty()
  first_name: string;

  @IsString()
  @IsNotEmpty()
  last_name: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(7)
  @Max(8)
  dni: number;

  @IsDate()
  birthday: Date;

  @IsString()
  @IsOptional()
  picture?: string;

  @IsArray()
  @IsOptional()
  @MaxLength(10, {
    each: true,
  })
  phone?: string[];

  @IsString()
  @IsNotEmpty()
  email: string;
  email_verified?: boolean;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  @IsPassword({
    message:
      'The password does not meet any of these, at least one uppercase letter, at least one lowercase letter, at least one number or at least one of the following special characters @; :-_/',
  })
  password?: string;

  @ValidateNested()
  @IsOptional()
  address?: Address[];
}

export class UpdateUserDTO {
  @IsArray()
  @IsOptional()
  pet?: string[];

  @IsString()
  @IsOptional()
  first_name?: string;

  @IsString()
  @IsOptional()
  last_name?: string;

  @IsNumber()
  @IsOptional()
  @Min(7)
  @Max(8)
  dni?: number;

  @IsDate()
  @IsOptional()
  birthday?: Date;

  @IsString()
  @IsOptional()
  picture?: string;

  @IsArray()
  @IsOptional()
  @MaxLength(10, {
    each: true,
  })
  phone?: string[];

  @IsString()
  @IsOptional()
  email?: string;
  email_verified?: boolean;

  @IsString()
  @IsOptional()
  username?: string;

  @IsString()
  @IsOptional()
  @IsPassword({
    message:
      'The password does not meet any of these, at least one uppercase letter, at least one lowercase letter, at least one number or at least one of the following special characters @; :-_/',
  })
  password?: string;

  @IsOptional()
  @IsString()
  @IsPassword()
  current_password?: string;

  @ValidateNested()
  @IsOptional()
  address?: Address[];
}

class Address {
  @IsString()
  city: string;

  @IsString()
  address: string;
}
