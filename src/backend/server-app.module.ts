import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { ServerTransferStateModule } from './transfer-state.server.module';
import { AppComponent } from '../web/app.component';
import { AppModule } from '../web/app.module';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    ServerModule,
    ServerTransferStateModule,
    AppModule
  ]
})
export class ServerAppModule { }
