import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material';
import { MobxAngularModule } from 'mobx-angular';

import { ReactiveFormsComponent } from './reactive-forms.component';
import { ReactiveFormsStore } from './reactive-forms.store';

const ROUTES: Routes = [
  { path: '', component: ReactiveFormsComponent }
];

@NgModule({
  imports: [
    MobxAngularModule,
    MatButtonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [ReactiveFormsComponent],
  providers: [ReactiveFormsStore]
})
export class ReactiveFormsModule {}
