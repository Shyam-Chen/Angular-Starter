import 'zone.js/dist/zone-node';
import 'rxjs/Rx';
import { join } from 'path';
import * as express from 'express';
// import * as mongoose from 'mongoose';
// import datastore from '@google-cloud/datastore';
import { enableProdMode } from '@angular/core';

import { ServerAppModuleNgFactory } from '../ngfactory/src/backend/server-app.module.ngfactory';
import { ngExpressEngine } from './express-engine';

enableProdMode();

const app = express();

// mongoose.connect('mongodb://backend-go:backend-go@ds113871.mlab.com:13871/fullstack-go-demo');
// mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
// mongoose.connection.once('open', () => console.log('Connection Succeeded.'));

// const ds = datastore({
//   projectId: 'fullstack-go-demo'
// });

app.engine('html', ngExpressEngine({
  aot: true,
  bootstrap: [ServerAppModuleNgFactory]
}));

app.set('port', (process.env.PORT || 8080));

app.set('view engine', 'html');
app.set('views', join(__dirname, 'src/web'));

app.use('/', express.static('dist', { index: false }));

const routes: string[] = ['/', '/about'];

routes.forEach(route => {
  app.get(route, (req, res) => {
    res.render('index', { req });
  });
});

app.listen(app.get('port'), () => {
  console.log(`Port: ${app.get('port')}.`);
});
