import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule, MatButtonModule, MatTableModule, MatDialogModule, MatProgressBarModule } from '@angular/material';
import { MobxAngularModule } from 'mobx-angular';

import { ReversePipe } from '~/shared/pipes/reverse.pipe';

import { RESTComponent } from './rest.component';
import { DialogEditComponent } from './components/dialog-edit.component';
import { DialogDeleteComponent } from './components/dialog-delete.component';
import { RESTStore } from './rest.store';

const ROUTES: Routes = [
  { path: '', component: RESTComponent }
];

@NgModule({
  imports: [
    // angular
    FormsModule,
    CommonModule,
    HttpClientModule,

    // material
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatProgressBarModule,

    // mobx
    MobxAngularModule,

    // feature
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
