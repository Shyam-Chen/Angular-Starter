import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material';
import { MobxAngularModule } from 'mobx-angular';

import { PlaygroundComponent } from './playground.component';
import { PlaygroundStore } from './playground.store';

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
    MatCardModule,
    MobxAngularModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [PlaygroundComponent],
  providers: [PlaygroundStore]
})
export class PlaygroundModule {}
