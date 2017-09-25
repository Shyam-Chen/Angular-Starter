import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RESTComponent } from './rest.component';

export const ROUTES: Routes = [
  { path: '', component: RESTComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    RESTComponent
  ]
})
export class RESTModule {}
