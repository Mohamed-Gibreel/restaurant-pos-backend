import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  ClassSerializerInterceptor,
  INestApplication,
  ValidationPipe,
} from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.useGlobalPipes(new ValidationPipe({}));

  registerGlobals(app);
  registerSwagger(app);

  await app.listen(process.env.PORT ?? 3000);
}

const registerGlobals = (app: INestApplication) => {
  app.useGlobalInterceptors(
    new ClassSerializerInterceptor(app.get(Reflector), {
      strategy: 'excludeAll',
      excludeExtraneousValues: true,
    }),
  );
};

const registerSwagger = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('Restaurant App')
    .setDescription('The restaurant app documenation')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
};
bootstrap();
