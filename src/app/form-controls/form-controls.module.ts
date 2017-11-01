import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MobxAngularModule } from 'mobx-angular';

import { FormControlsComponent } from './form-controls.component';
import { FormControlsStore } from './form-controls.store';

const ROUTES: Routes = [
  { path: '', component: FormControlsComponent }
];

@NgModule({
  imports: [
    MobxAngularModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    FormControlsComponent
  ],
  providers: [
    FormControlsStore
  ]
})
export class FormControlsModule {}
