import { NgModule, Component} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  template: `
    <h2>About Page</h2>
  `
})
export class AboutComponent { }

@NgModule({
  declarations: [AboutComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: AboutComponent, pathMatch: 'full' }
    ])
  ]
})
export class AboutModule { }
