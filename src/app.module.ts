import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { NgxsModule } from '@ngxs/store';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    NgxsModule.forRoot([]),
    NgxsRouterPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),

    AppRoutingModule,
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
