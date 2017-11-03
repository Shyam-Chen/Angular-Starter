import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { MobxAngularModule } from 'mobx-angular';

import { FormControlsComponent } from './form-controls.component';
import { FormControlsStore } from './form-controls.store';

const ROUTES: Routes = [
  { path: '', component: FormControlsComponent }
];

@NgModule({
  imports: [
    FormsModule,
    MatInputModule,
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
