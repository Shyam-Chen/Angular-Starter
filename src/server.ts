import { NestFactory } from '@nestjs/core';
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as cors from 'cors';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';

import { ApiModule } from './api/api.module';

admin.initializeApp();

const vm = express();

vm.use(cors());
vm.use(morgan('tiny'));
vm.use(bodyParser.json());
vm.use(bodyParser.urlencoded({ extended: false }));

const bootstrap = async (instance) => {
  const api = await NestFactory.create(ApiModule, instance);
  await api.init();
};

bootstrap(vm);

export const api = functions.https.onRequest(vm);

// -

// const sh = express();

// export const app = functions.https.onRequest(sh);
