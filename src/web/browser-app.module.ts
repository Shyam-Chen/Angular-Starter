import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { BrowserTransferStateModule } from './transfer-state.browser.module';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'Universal Web Application' }),
    BrowserTransferStateModule,
    AppModule
  ]
})
export class BrowserAppModule { }
