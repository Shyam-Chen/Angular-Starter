import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import * as cors from 'cors';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';

import { ApiModule } from './api/api.module';

const bootstrap = async () => {
  const vm = express();

  vm.use(cors());
  vm.use(morgan('tiny'));
  vm.use(bodyParser.json());
  vm.use(bodyParser.urlencoded({ extended: false }));

  const app = await NestFactory.create(ApiModule, vm);
  await app.listen(5000, () => console.log('[*] http://localhost:5000/'));
};

bootstrap();

// export const api = functions.https.onRequest(vm);

// -

// export const app = functions.https.onRequest(sh);
