import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule, MatSlideToggleModule, MatSliderModule } from '@angular/material';
import { MobxAngularModule } from 'mobx-angular';

import { FormControlsComponent } from './form-controls.component';
import { FormControlsStore } from './form-controls.store';

import { TemplateDrivenComponent } from './template-driven/template-driven.component';

const ROUTES: Routes = [
  {
    path: '', children: [
      { path: '', component: FormControlsComponent },
      { path: 'template-driven', component: TemplateDrivenComponent },  // loadChildren: './template-driven/template-driven.module#TemplateDrivenModule'
      { path: 'reactive-forms', loadChildren: './reactive-forms/reactive-forms.module#ReactiveFormsModule' }
    ]
  }
];

@NgModule({
  imports: [
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatSliderModule,
    MobxAngularModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    FormControlsComponent,
    TemplateDrivenComponent
  ],
  providers: [
    FormControlsStore
  ]
})
export class FormControlsModule {}
