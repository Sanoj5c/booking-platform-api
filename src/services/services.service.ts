import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

@Injectable()
export class ServicesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createServiceDto: CreateServiceDto, ownerId: number) {
    return this.prisma.service.create({
      data: {
        title: createServiceDto.title,
        description: createServiceDto.description,
        duration: createServiceDto.duration,
        price: createServiceDto.price,
        isActive: createServiceDto.isActive ?? true,
        ownerId,
      },
    });
  }

  async findAll() {
    return this.prisma.service.findMany({
      include: {
        owner: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });
  }

  async findOne(id: number) {
    const service = await this.prisma.service.findUnique({
      where: { id },
      include: {
        owner: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    if (!service) {
      throw new NotFoundException('Service not found');
    }

    return service;
  }

  async update(id: number, updateServiceDto: UpdateServiceDto) {
    await this.findOne(id);

    return this.prisma.service.update({
      where: { id },
      data: updateServiceDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    await this.prisma.service.delete({
      where: { id },
    });

    return {
      message: 'Service deleted successfully',
    };
  }
}
