import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material';

import { PlaygroundComponent } from './playground.component';

const ROUTES: Routes = [
  {
    path: '', children: [
      { path: '', component: PlaygroundComponent },
      { path: 'counter', loadChildren: './counter/counter.module#CounterModule' }
    ]
  }
];

@NgModule({
  imports: [
    MatButtonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [PlaygroundComponent]
})
export class PlaygroundModule {}
