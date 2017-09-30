import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material';

import { CounterComponent } from './counter.component';

export const ROUTES: Routes = [
  { path: '', component: CounterComponent }
];

@NgModule({
  imports: [
    MatButtonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    CounterComponent
  ]
})
export class CounterModule {}
