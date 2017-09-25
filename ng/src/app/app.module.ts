import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: 'counter', loadChildren: './counter/counter.module#CounterModule' },
  { path: 'rest', loadChildren: './rest/rest.module#RESTModule' }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
