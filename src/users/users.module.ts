// src/users/users.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service.ts';
import { UsersController } from './users.controller.ts';
import { User } from './entities/user.entity.ts'; // Importa tu entidad

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), // Registra la entidad User
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}