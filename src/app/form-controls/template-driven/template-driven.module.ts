import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatSliderModule
} from '@angular/material';
import { MobxAngularModule } from 'mobx-angular';

import { TemplateDrivenComponent } from './template-driven.component';
import { TemplateDrivenStore } from './template-driven.store';

const ROUTES: Routes = [
  { path: '', component: TemplateDrivenComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatSliderModule,

    MobxAngularModule,

    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    TemplateDrivenComponent
  ],
  providers: [
    TemplateDrivenStore
  ]
})
export class TemplateDrivenModule {}
