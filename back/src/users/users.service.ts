import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async create(userDto: Omit<User, 'id'>): Promise<User> {
    userDto.password = await bcrypt.hash(userDto.password, 10);
    return this.prisma.user.create({
      data: userDto,
    });
  }
}
