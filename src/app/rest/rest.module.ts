import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MdInputModule, MdButtonModule, MdCardModule, MdListModule, MdDialogModule, MdProgressBarModule } from '@angular/material';
import { MobxAngularModule } from 'mobx-angular';

import { ReversePipe } from '../shared/pipes/reverse.pipe';

import { RESTComponent } from './rest.component';
import { AppRESTEditDialogComponent } from './dialog-edit.component';
import { AppRESTDeleteDialogComponent } from './dialog-delete.component';
import { RESTStore } from './rest.store';

export const ROUTES: Routes = [
  { path: '', component: RESTComponent }
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    MdInputModule,
    MdButtonModule,
    MdCardModule,
    MdListModule,
    MdDialogModule,
    MdProgressBarModule,
    MobxAngularModule,

    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    RESTComponent,
    AppRESTEditDialogComponent,
    AppRESTDeleteDialogComponent,

    ReversePipe,
  ],
  entryComponents: [
    AppRESTEditDialogComponent,
    AppRESTDeleteDialogComponent
  ],
  providers: [
    RESTStore
  ]
})
export class RESTModule {}
