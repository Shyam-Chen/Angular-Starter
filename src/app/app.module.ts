import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { TransferHttpModule } from '../shared/transfer-http/transfer-http.module';

import { AppComponent } from './app.component';

@Component({
  template: `
    <h2>Home Page</h2>
  `
})
export class HomeComponent { }

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    TransferHttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'about', loadChildren: './about/about.module#AboutModule' }
    ])
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  exports: [AppComponent]
})
export class AppModule { }
