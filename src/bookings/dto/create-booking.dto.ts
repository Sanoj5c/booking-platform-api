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
  @IsString()
  @IsNotEmpty()
  customerName!: string;

  @IsEmail()
  customerEmail!: string;

  @IsString()
  @IsNotEmpty()
  customerPhone!: string;

  @IsInt()
  @Min(1)
  serviceId!: number;

  @IsDateString()
  bookingDate!: string;

  @IsString()
  @IsNotEmpty()
  bookingTime!: string;

  @IsOptional()
  @IsString()
  notes?: string;
}
