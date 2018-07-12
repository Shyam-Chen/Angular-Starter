import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Location, APP_BASE_HREF, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: 'hello-world', loadChildren: './hello-world/hello-world.module#HelloWorldModule' },
  // { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules }),
  ],
  declarations: [AppComponent],
  providers: [
    Location,
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: PathLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
