import 'reflect-metadata';
import 'zone.js/dist/zone-node';

import { readFileSync } from 'fs';
import { join } from 'path';

import * as express from 'express';
import * as mongoose from 'mongoose';
import * as compression from 'compression';
import * as cors from 'cors';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';

import { enableProdMode } from '@angular/core';
import { platformServer, renderModuleFactory } from '@angular/platform-server';

import { ngExpressEngine } from '@nguniversal/express-engine';

import { AppBackendModule } from './backend/app-backend.module';

import { listRoutes } from './backend/routes';

enableProdMode();

if (process.env.NODE_ENV === 'production') {
  require('@google/cloud-trace').start();
}

if (process.env.GCLOUD_PROJECT) {
  require('@google/cloud-debug').start();
}

const app = express();

app.engine('html', ngExpressEngine({
  bootstrap: AppBackendModule
}));

app.set('view engine', 'html');
app.set('views', 'dist')

app.set('port', (process.env.PORT || 8000));
app.set('mongodb-uri', (process.env.MONGODB_URI || 'mongodb://web-go:web-go@ds133961.mlab.com:33961/web-go-demo'));

mongoose.connect(app.get('mongodb-uri'));
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', () => console.log('DB: Connection Succeeded.'));

app.use(compression());
app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/__/list', listRoutes);

app.use('/', express.static('dist', { index: false }));

app.get('*', (req, res) => {
  res.render('../dist/index.html', { req, res });
});

app.listen(app.get('port'), (): void => {
  console.log('App: Bootstrap Succeeded.');
  console.log(`Port: ${app.get('port')}.`);
});
