import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { BrowserUniversalCacheModule } from '../browser-universal-cache.module';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'Universal Web Application' }),
    BrowserUniversalCacheModule,
    AppModule
  ]
})
export class BrowserAppModule { }
