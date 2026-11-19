// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity.ts';
import { CreateUserDto } from './dto/create-user.dto.ts';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) // Inyecta el repositorio de User
    private usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(id: string): Promise<User|null> {
    return this.usersRepository.findOneBy({ id: parseInt(id, 10) });
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(newUser);
  }

}