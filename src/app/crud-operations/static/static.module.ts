import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { MobxAngularModule } from 'mobx-angular';

import { StaticComponent } from './static.component';
import { StaticStore } from './static.store';

const ROUTES: Routes = [
  { path: '', component: StaticComponent }
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
    StaticComponent
  ],
  providers: [
    StaticStore
  ]
})
export class StaticModule {}
