import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MdInputModule, MdButtonModule, MdCardModule, MdListModule, MdDialogModule, MdProgressBarModule } from '@angular/material';

import { AppComponent } from './app.component';

import { AppListEditDialogComponent } from './components/app-list-edit-dialog.component';

import { ListService } from './services/list.service';
import { BroadcasterService } from './services/broadcaster.service';

import { ReversePipe } from './pipes/reverse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppListEditDialogComponent,

    ReversePipe,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'mean-stack-restful-api' }),
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,

    MdInputModule,
    MdButtonModule,
    MdCardModule,
    MdListModule,
    MdDialogModule,
    MdProgressBarModule,
  ],
  entryComponents: [
    AppListEditDialogComponent,
    // AppListDeleteDialogComponent,
  ],
  providers: [
    ListService,
    BroadcasterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
