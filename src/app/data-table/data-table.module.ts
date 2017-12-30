import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material';
import { MobxAngularModule } from 'mobx-angular';

import { DataTableComponent } from './data-table.component';
import { DataTableStore } from './data-table.store';

const ROUTES: Routes = [
  {
    path: '', children: [
      { path: '', component: DataTableComponent },
      // { path: 'static', loadChildren: './static/static.module#StaticModule' },
      // { path: 'rest', loadChildren: './rest/rest.module#RESTModule' }
    ]
  }
];

@NgModule({
  imports: [
    MobxAngularModule,
    MatCardModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [DataTableComponent],
  providers: [DataTableStore]
})
export class DataTableModule {}
