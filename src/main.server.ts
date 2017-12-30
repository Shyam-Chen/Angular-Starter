import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import * as cors from 'cors';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';

import { ApiModule } from './api/api.module';

const bootstrap = async () => {
  const instance = express();

  instance.use(cors());
  instance.use(morgan('tiny'));
  instance.use(bodyParser.json());
  instance.use(bodyParser.urlencoded({ extended: false }));

  const app = await NestFactory.create(ApiModule, instance);
  await app.listen(3000, () => console.log('[*] http://localhost:3000/'));
};

bootstrap();
