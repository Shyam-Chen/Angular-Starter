import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material';
import { MobxAngularModule } from 'mobx-angular';

import { ReactiveFormsComponent } from './reactive-forms.component';

const ROUTES: Routes = [
  { path: '', component: ReactiveFormsComponent }
];

@NgModule({
  imports: [
    MobxAngularModule,
    MatButtonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    ReactiveFormsComponent
  ]
})
export class ReactiveFormsModule {}
