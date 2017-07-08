import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServerModule } from '@angular/platform-server';

import { ServerStateTransferModule } from '@ngx-universal/state-transfer';

import { AppModule } from '../app/app.module';
import { AppComponent } from '../app/app.component';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'mean-stack-restful-api' }),
    ServerModule,
    ServerStateTransferModule.forRoot(),
    AppModule,
  ],
  bootstrap: [AppComponent]
})
export class AppBackendModule { }
