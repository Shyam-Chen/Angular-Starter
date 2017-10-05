import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule, Location, APP_BASE_HREF, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { MatToolbarModule, MatButtonModule, MatIconModule } from '@angular/material';
import { MobxAngularModule } from 'mobx-angular';

import { AppComponent } from './app.component';
import { AppStore } from './app.store';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: 'counter', loadChildren: './counter/counter.module#CounterModule' },
  { path: 'rest', loadChildren: './rest/rest.module#RESTModule' }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MobxAngularModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Location,
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    AppStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
