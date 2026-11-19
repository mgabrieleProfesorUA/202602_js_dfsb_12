// src/users/users.controller.ts
import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service.ts';
import { CreateUserDto } from './dto/create-user.dto.ts';

@Controller('users') // Ruta base: /users
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get() // Maneja GET /users
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id') // Maneja GET /users/:id (donde :id es un parámetro)
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Get('profile') // Maneja GET /users/profile
  getProfile() { /* ... */ }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

}