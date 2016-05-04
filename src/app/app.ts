import { Component } from '@angular/core';

import { HelloWorldComponent } from './hello-world/hello-world';

@Component({
  selector: 'app',
  template: `
    <h3 class="title">Angular2TS Starter Kit</h3>
    <hello-world></hello-world>
  `,
  styles: [`
    .title {
      color: #3F51B5
    }
  `],
  directives: [HelloWorldComponent],
  providers: [],
  pipes: []
})
export class App { }
