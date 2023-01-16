import { Injectable } from '@nestjs/common';
import bcrypt from 'bcrypt';
import { User } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  create(userDto: Omit<User, 'id'>): Promise<User> {
    userDto.password = bcrypt.hashSync(userDto.password, process.env.PASS_HASH);
    return this.prisma.user.create({
      data: userDto,
    });
  }
}
