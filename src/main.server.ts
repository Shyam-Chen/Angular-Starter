import { NestFactory } from '@nestjs/core';

import { ApiModule } from './api/api.module';

const bootstrap = async () => {
  const app = await NestFactory.create(ApiModule);
  await app.listen(3000);
}

bootstrap();
