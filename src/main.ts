import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  const configDoc = new DocumentBuilder()
    .setTitle('Simple project for TinyPlay corp.')
    .setDescription(
      'This pet project need to show my skills after 2 days reading nestjs doc',
    )
    .setVersion('1.0.0')
    .addTag('TinyPlay')
    .build();
  const document = SwaggerModule.createDocument(app, configDoc);
  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
}

start();
