declare var process: any;
declare var module: any;

import 'core-js/es/reflect';
import 'core-js/stable/reflect';
import 'core-js/features/reflect';
import 'zone.js/dist/zone';
import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import './assets/styles/global.css';
import { AppModule } from './app.module';

if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.log(err));

if (module.hot) {
  module.hot.accept();
}
