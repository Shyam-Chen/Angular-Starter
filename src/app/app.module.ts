import '../styles/styles.scss';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CommonModule, Location, APP_BASE_HREF, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { MatToolbarModule, MatSidenavModule, MatButtonModule, MatIconModule, MatCardModule } from '@angular/material';
import { MobxAngularModule } from 'mobx-angular';

import { NotFoundComponent } from '~/shared/components/not-found.component';

import { AppComponent } from './app.component';
import { AppStore } from './app.store';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: 'crud-operations', loadChildren: './crud-operations/crud-operations.module#CRUDOperationsModule' },
  { path: 'form-controls', loadChildren: './form-controls/form-controls.module#FormControlsModule' },
  { path: 'playground', loadChildren: './playground/playground.module#PlaygroundModule' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MobxAngularModule,
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules })
  ],
  declarations: [
    AppComponent,
    NotFoundComponent
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
