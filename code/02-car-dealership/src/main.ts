import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //crear pipes globales
  app.useGlobalPipes(
    new ValidationPipe({
      //limpia la lista enviada y solo deja los que se encuentran en el dto
      whitelist: true,
      //responde que solo debe enviar los parametros del dto
      forbidNonWhitelisted: true,
    }),
  )
  await app.listen(3000);
}
bootstrap();
