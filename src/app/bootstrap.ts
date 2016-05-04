import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx';

import { App } from './app';

bootstrap(App, [ROUTER_PROVIDERS, HTTP_PROVIDERS])
  .catch(err => console.error(err));
