import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MdInputModule, MdButtonModule, MdCardModule, MdListModule, MdDialogModule, MdProgressBarModule } from '@angular/material';

import { BroadcasterService } from '../shared/services/broadcaster/broadcaster.service';
import { HiddenDirective } from '../shared/directives/hidden.directive';
import { ReversePipe } from '../shared/pipes/reverse.pipe';

import { RESTComponent } from './rest.component';
import { AppRESTEditDialogComponent } from './edit-dialog.component';
import { AppRESTDeleteDialogComponent } from './delete-dialog.component';
import { ListService } from './list.service';

@NgModule({
  declarations: [
    RESTComponent,
    AppRESTEditDialogComponent,
    AppRESTDeleteDialogComponent,

    HiddenDirective,

    ReversePipe,
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,

    MdInputModule,
    MdButtonModule,
    MdCardModule,
    MdListModule,
    MdDialogModule,
    MdProgressBarModule
  ],
  entryComponents: [
    AppRESTEditDialogComponent,
    AppRESTDeleteDialogComponent
  ],
  providers: [
    ListService,
    BroadcasterService,
  ],
  exports: [RESTComponent]
})
export class RESTModule { }
