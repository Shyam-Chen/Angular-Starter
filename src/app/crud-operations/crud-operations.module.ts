import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material';
import { MobxAngularModule } from 'mobx-angular';

import { CRUDOperationsComponent } from './crud-operations.component';
import { CRUDOperationsStore } from './crud-operations.store';

const ROUTES: Routes = [
  {
    path: '', children: [
      { path: '', component: CRUDOperationsComponent },
      { path: 'static', loadChildren: './static/static.module#StaticModule' },
      { path: 'rest', loadChildren: './rest/rest.module#RESTModule' }
    ]
  }
];

@NgModule({
  imports: [
    MobxAngularModule,
    MatCardModule,
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
