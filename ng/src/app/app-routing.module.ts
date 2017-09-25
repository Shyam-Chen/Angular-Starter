import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'counter', loadChildren: './counter/counter.module#CounterModule' },
  { path: 'rest', loadChildren: './rest/rest.module#RESTModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
