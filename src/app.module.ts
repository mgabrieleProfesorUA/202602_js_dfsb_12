import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UsersModule } from './users/users.module.ts'; // Tu módulo de usuarios

@Module({
  imports: [
    TypeOrmModule.forRoot({ // Configuración de la conexión a la DB
      type: 'postgres',
      host: '172.29.206.190',
      port: 5433,
      username: 'mi_usuario',
      password: 'mi_contrasenia',
      database: 'mi_base_de_datos',
      autoLoadEntities: true, // Carga automáticamente las entidades
      synchronize: true, // Crea tablas automáticamente (¡solo para desarrollo!)
    }),
    UsersModule, // Importa tu UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
