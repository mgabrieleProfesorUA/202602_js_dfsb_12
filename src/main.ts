import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ValidationPipe } from '@nestjs/common'; // Importa ValidationPipe

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Aplica el ValidationPipe globalmente
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Elimina propiedades que no están en el DTO
    forbidNonWhitelisted: true, // Lanza error si hay propiedades no permitidas
    transform: true, // Transforma el payload al tipo DTO
  }));
  
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
