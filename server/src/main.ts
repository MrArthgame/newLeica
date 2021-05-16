import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe({ forbidUnknownValues: true }));
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.enableCors({
    credentials: true,
  });
  await app.listen(process.env.PORT || 5000);
}
bootstrap();
