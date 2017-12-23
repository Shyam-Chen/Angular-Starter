import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatInputModule, MatFormFieldModule, MatDialogModule } from '@angular/material';
import { MobxAngularModule } from 'mobx-angular';

import { StaticComponent } from './static.component';
import { StaticStore } from './static.store';

import { DialogDeleteComponent } from './components/dialog-delete.component';
import { DialogEditComponent } from './components/dialog-edit.component';

const ROUTES: Routes = [
  { path: '', component: StaticComponent }
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MobxAngularModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    StaticComponent,
    DialogDeleteComponent,
    DialogEditComponent
  ],
  providers: [
    StaticStore
  ],
  entryComponents: [
    DialogDeleteComponent,
    DialogEditComponent
  ]
})
export class StaticModule {}
