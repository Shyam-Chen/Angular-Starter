import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MdInputModule, MdButtonModule, MdCardModule, MdListModule, MdDialogModule, MdProgressBarModule } from '@angular/material';

import { BroadcasterService } from './shared/broadcaster/broadcaster.service';
import { HiddenDirective } from './shared/directives/hidden.directive';
import { ReversePipe } from './shared/pipes/reverse.pipe';

import { RESTComponent } from './rest/rest.component';
import { AppRESTEditDialogComponent } from './rest/app-rest-edit-dialog.component';
import { ListService } from './rest/list.service';

import { AppComponent } from './app.component';
// import { RESTModule } from './rest/rest.module';

@NgModule({
  declarations: [
    AppComponent,
    // RESTModule,
    RESTComponent,
    AppRESTEditDialogComponent,

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
  ],
  entryComponents: [
    AppRESTEditDialogComponent
  ],
  providers: [
    ListService,
    BroadcasterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
