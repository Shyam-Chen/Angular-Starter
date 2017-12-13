import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material';
import { MobxAngularModule } from 'mobx-angular';

import { CRUDComponent } from './crud.component';
import { CRUDStore } from './crud.store';

const ROUTES: Routes = [
  { path: '', component: CRUDComponent }
];

@NgModule({
  imports: [
    MobxAngularModule,
    MatButtonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    CRUDComponent
  ],
  providers: [
    CRUDStore
  ]
})
export class CRUDModule {}
