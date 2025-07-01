import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from '../services/users.service';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUsers() {
    const data = await this.usersService.getAll();
    return {
      message: 'Users retrieved successfully',
      success: true,
      data: data,
    };
  }

  @Get('/exception')
  async getUser() {
    throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
  }
}
