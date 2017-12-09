import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule, MatSlideToggleModule, MatSliderModule } from '@angular/material';
import { MobxAngularModule } from 'mobx-angular';

import { FormControlsComponent } from './form-controls.component';
import { FormControlsStore } from './form-controls.store';

import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

const ROUTES: Routes = [
  {
    path: '', children: [
      { path: '', component: FormControlsComponent },
      { path: 'template-driven', component: TemplateDrivenComponent },  // loadChildren: './template-driven/template-driven.module#TemplateDrivenModule'
      { path: 'reactive-forms', component: ReactiveFormsComponent }
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
    TemplateDrivenComponent,
    ReactiveFormsComponent
  ],
  providers: [
    FormControlsStore
  ]
})
export class FormControlsModule {}
