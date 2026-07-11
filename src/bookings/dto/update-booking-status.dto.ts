import { BookingStatus } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';

export class UpdateBookingStatusDto {
  @ApiProperty({
    enum: BookingStatus,
    example: BookingStatus.CONFIRMED,
    description: 'Current status of the booking',
  })
  @IsEnum(BookingStatus)
  status!: BookingStatus;
}
