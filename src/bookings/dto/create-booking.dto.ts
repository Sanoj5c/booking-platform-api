import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDateString,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class CreateBookingDto {
  @ApiProperty({
    example: 'Kamal Perera',
    description: 'Full name of the customer',
  })
  @IsString()
  @IsNotEmpty()
  customerName!: string;

  @ApiProperty({
    example: 'kamal@example.com',
    description: 'Email address of the customer',
  })
  @IsEmail()
  customerEmail!: string;

  @ApiProperty({
    example: '0771234567',
    description: 'Contact phone number of the customer',
  })
  @IsString()
  @IsNotEmpty()
  customerPhone!: string;

  @ApiProperty({
    example: 1,
    description: 'ID of the service being booked',
    minimum: 1,
  })
  @IsInt()
  @Min(1)
  serviceId!: number;

  @ApiProperty({
    example: '2026-07-20T00:00:00.000Z',
    description: 'Booking date in ISO 8601 format',
  })
  @IsDateString()
  bookingDate!: string;

  @ApiProperty({
    example: '10:30 AM',
    description: 'Requested booking time',
  })
  @IsString()
  @IsNotEmpty()
  bookingTime!: string;

  @ApiPropertyOptional({
    example: 'First haircut appointment',
    description: 'Additional notes for the booking',
  })
  @IsOptional()
  @IsString()
  notes?: string;
}
