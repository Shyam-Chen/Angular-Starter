import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material';
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
    MatButtonModule,
    MobxAngularModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [PlaygroundComponent],
  providers: [PlaygroundStore]
})
export class PlaygroundModule {}
