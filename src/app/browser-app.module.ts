import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserTransferStateModule } from '../shared/transfer-state/browser-transfer-state.module';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'angular-go' }),
    BrowserTransferStateModule,
    AppModule
  ],
  bootstrap: [AppComponent]
})
export class BrowserAppModule { }
