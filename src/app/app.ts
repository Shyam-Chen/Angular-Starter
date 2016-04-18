import { Component } from 'angular2/core';

import { ClickMeComponent } from './click-me/click-me';

@Component({
  selector: 'app',
  template: `
    <click-me></click-me>
  `,
  styles: [`
    .title {
      color: #3F51B5;
    }
  `],
  directives: [
    ClickMeComponent
  ],
  viewProviders: [],
  pipes: []
})
export class App {

  constructor() {
    // ...
  }

}
