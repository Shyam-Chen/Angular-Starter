import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelloWorldComponent } from './hello-world.component';

const ROUTES: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HelloWorldComponent },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
  ],
  declarations: [HelloWorldComponent,],
  providers: [],
})
export class HelloWorldModule {}
