import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material';
import { MobxAngularModule } from 'mobx-angular';

import { ReactiveComponent } from './reactive.component';
import { ReactiveStore } from './reactive.store';

const ROUTES: Routes = [
  { path: '', component: ReactiveComponent }
];

@NgModule({
  imports: [
    MobxAngularModule,
    MatButtonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [ReactiveComponent],
  providers: [ReactiveStore]
})
export class ReactiveModule {}
