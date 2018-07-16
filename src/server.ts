import { NestFactory } from '@nestjs/core';
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as cors from 'cors';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
// import * as request from 'request';

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

// sh.get('*', (req, res) => {
//   const botUserAgents = [
//     'W3C_Validator',
//     'baiduspider',
//     'bingbot',
//     'embedly',
//     'facebookexternalhit',
//     'linkedinbot',
//     'outbrain',
//     'pinterest',
//     'quora link preview',
//     'rogerbot',
//     'showyoubot',
//     'slackbot',
//     'twitterbot',
//     'vkShare',
//   ];

//   const rendertronUrl = process.env.RENDERTRON_URL;
//   const targetUrl = process.env.SITE_URL + req.originalUrl;

//   if (new RegExp(botUserAgents.join('|'), 'i').test(req.headers['user-agent'])) {
//     request(`${rendertronUrl}/render/${targetUrl}`, (error, response, body) => {
//       res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
//       res.set('Vary', 'User-Agent');

//       res.send(`${body}`);
//     });
//   } else {
//     request(process.env.SITE_URL, (error, response, body) => {
//       res.send(`${body}`);
//     });
//   }
// });

// export const app = functions.https.onRequest(sh);
