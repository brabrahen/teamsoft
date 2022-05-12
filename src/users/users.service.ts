import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private db: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    const userExist = await this.db.user.findFirst({
      where: { cnpj: createUserDto.cnpj}
    })

    if(userExist) {
      throw new ConflictException('CNPJ já esxitente!')
    }

    const user = await this.db.user.create({
      data: {
          ...createUserDto
      }
    })
    return user;
  }

  async findAll() {
    const users = await this.db.user.findMany()
    return users;
  }

  async findOne(id: string) {
    const user = await this.db.user.findUnique({
      where: { id },
    })
    if (user) {
      return user
    }
    throw new NotFoundException('Usuário não encontrado!')
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const updateUser = await this.db.user.update({
      where: { id: id },
      data: updateUserDto,
    })
    return updateUser;
  }

  async remove(id: string) {
    await this.db.user.delete({
      where: { id }
    })
    return {
      message: 'Usuário deletado'
    };
  }
}
