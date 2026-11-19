// src/users/dto/create-user.dto.ts
import { IsString, IsInt, Min } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly name: string;

  @IsInt()
  @Min(18)
  readonly age: number;
}