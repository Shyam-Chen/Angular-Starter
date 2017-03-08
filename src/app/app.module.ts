import { NgModule, Component } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@Component({
  template: `
    <h1>home works!</h1>
  `
})
export class HomeComponent { }

@Component({
  template: `
    <h1>about works!</h1>
  `
})
export class AboutComponent { }

@NgModule({
  imports: [
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'about', component: AboutComponent, pathMatch: 'full' }
    ])
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/'}
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  exports: [AppComponent]
})
export class AppModule { }
