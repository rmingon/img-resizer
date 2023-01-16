import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User, Prisma } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(
    @Body() userDto: Omit<User, 'id'>,
  ): Promise<Omit<User, 'password'>> {
    const { password, ...rest } = await this.usersService.create(userDto);
    return rest;
  }

}
