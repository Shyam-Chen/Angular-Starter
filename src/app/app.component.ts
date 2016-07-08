import { Component } from '@angular/core';

import { HelloAngularComponent } from './hello-angular/hello-angular';

@Component({
  selector: 'app',
  template: `
    <h3 class="title">Angular2TS Starter Kit</h3>
    <hello-angular></hello-angular>
  `,
  styles: [`
    .title {
      color: #3F51B5
    }
  `],
  directives: [HelloAngularComponent],
  providers: [],
  viewProviders: [],
  pipes: []
})
export class AppComponent { }
