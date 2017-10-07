import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MdInputModule, MdButtonModule, MdCardModule, MdListModule, MdDialogModule, MatProgressSpinnerModule } from '@angular/material';
import { MobxAngularModule } from 'mobx-angular';

import { ReversePipe } from '../shared/pipes/reverse.pipe';

import { RESTComponent } from './rest.component';
import { DialogEditComponent } from './dialog-edit.component';
import { DialogDeleteComponent } from './dialog-delete.component';
import { RESTStore } from './rest.store';

const ROUTES: Routes = [
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
    MatProgressSpinnerModule,
    MobxAngularModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    RESTComponent,
    DialogEditComponent,
    DialogDeleteComponent,
    ReversePipe
  ],
  entryComponents: [
    DialogEditComponent,
    DialogDeleteComponent,
  ],
  providers: [
    RESTStore
  ]
})
export class RESTModule {}
