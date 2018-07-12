import '@angular/material/prebuilt-themes/indigo-pink.css';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import './assets/styles/global.css';
import { AppModule } from './app/app.module';

// if (process.env.NODE_ENV === 'production') {
//   enableProdMode();
// }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
