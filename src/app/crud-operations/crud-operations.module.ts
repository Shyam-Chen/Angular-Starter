import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { MobxAngularModule } from 'mobx-angular';

import { CRUDOperationsComponent } from './crud-operations.component';
import { CRUDOperationsStore } from './crud-operations.store';

const ROUTES: Routes = [
  { path: '', component: CRUDOperationsComponent }
];

@NgModule({
  imports: [
    MobxAngularModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    CRUDOperationsComponent
  ],
  providers: [
    CRUDOperationsStore
  ]
})
export class CRUDOperationsModule {}
