import { PrismaService } from './../prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@Injectable()
export class AddressService {
  constructor(private db: PrismaService) {}
  async create(createAddressDto: CreateAddressDto) {
    const addressCreation = await this.db.address.create({
      data: {
        ...createAddressDto
      }
    })
    return addressCreation;
  }

  async findAll() {
    const address = await this.db.address.findMany()
    return address;
  }

  async findOne(id: string) {
    const address =await this.db.user.findUnique({
      where: { id },
    })
    return address;
  }

  async update(id: string, updateAddressDto: UpdateAddressDto) {
    const updateAddress = await this.db.address.update({
      where: { id: id},
      data: {...updateAddressDto},
    })
    return updateAddress;
  }

  async remove(id: string) {
    await this.db.address.delete({
      where: { id }
    })
    return {
      message: 'Endereço deletado!'
    };
  }
}
