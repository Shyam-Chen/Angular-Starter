import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MdInputModule, MdButtonModule, MdCardModule, MdListModule, MdDialogModule, MdProgressBarModule } from '@angular/material';
// import { StoreModule, ActionReducer, combineReducers } from '@ngrx/store';
// import { EffectsModule } from '@ngrx/effects';
// import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { BroadcasterService } from './shared/services/broadcaster/broadcaster.service';
import { HiddenDirective } from './shared/directives/hidden.directive';
import { ReversePipe } from './shared/pipes/reverse.pipe';

import { RESTComponent } from './rest/rest.component';
import { AppRESTEditDialogComponent } from './rest/edit-dialog.component';
import { AppRESTDeleteDialogComponent } from './rest/delete-dialog.component';
import { ListService } from './rest/list.service';

import { AppComponent } from './app.component';
// import { RESTModule } from './rest/rest.module';

@NgModule({
  declarations: [
    AppComponent,
    // RESTModule,
    RESTComponent,
    AppRESTEditDialogComponent,
    AppRESTDeleteDialogComponent,

    HiddenDirective,

    ReversePipe,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'angular-starter-kit' }),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,

    MdInputModule,
    MdButtonModule,
    MdCardModule,
    MdListModule,
    MdDialogModule,
    MdProgressBarModule,

    // StoreModule.forRoot(<any>{ app:  }),
    // EffectsModule.forRoot([]),
    // StoreRouterConnectingModule
  ],
  entryComponents: [
    AppRESTEditDialogComponent,
    AppRESTDeleteDialogComponent
  ],
  providers: [
    ListService,
    BroadcasterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
