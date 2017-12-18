import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material';
import { MobxAngularModule } from 'mobx-angular';

import { CounterComponent } from './counter.component';
import { CounterStore } from './counter.store';

const ROUTES: Routes = [
  { path: '', component: CounterComponent }
];

@NgModule({
  imports: [
    MobxAngularModule,
    MatButtonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    CounterComponent
  ],
  providers: [
    CounterStore
  ]
})
export class CounterModule {}
