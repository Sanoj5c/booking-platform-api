import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';

export class CreateServiceDto {
  @ApiProperty({
    example: 'Haircut Service',
    description: 'Title of the service',
  })
  @IsString()
  @IsNotEmpty()
  title!: string;

  @ApiProperty({
    example: 'Professional haircut service',
    description: 'Description of the service',
  })
  @IsString()
  @IsNotEmpty()
  description!: string;

  @ApiProperty({
    example: 45,
    description: 'Service duration in minutes',
    minimum: 1,
  })
  @IsInt()
  @Min(1)
  duration!: number;

  @ApiProperty({
    example: 2500,
    description: 'Price of the service',
    minimum: 0.01,
  })
  @IsNumber()
  @IsPositive()
  price!: number;

  @ApiPropertyOptional({
    example: true,
    description: 'Indicates whether the service is active',
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
