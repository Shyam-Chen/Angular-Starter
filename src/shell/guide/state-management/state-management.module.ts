import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { NgxsModule } from '@ngxs/store';

import { CounterComponent } from './counter.component';
import { CounterState } from './counter.state';

const ROUTES: Routes = [
  { path: '', component: CounterComponent },
];

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild(ROUTES),
    NgxsModule.forFeature([CounterState]),
  ],
  declarations: [CounterComponent],
  providers: [],
})
export class StateManagementModule {}
