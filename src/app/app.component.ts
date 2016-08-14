import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <h3 class="title">Angular2TS Starter Kit</h3>
    <hello></hello>
  `,
  styles: [`
    .title {
      color: #3F51B5;
    }
  `],
  viewProviders: []
})
export class AppComponent { }
