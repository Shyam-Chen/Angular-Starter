import { Component } from 'angular2/core';

@Component({
  selector: 'click-me',
  template: `
    <button (click)="onClickMe()">Click Me</button>
    <p>{{ clickMessage }}</p>
  `
})
export class ClickMeComponent {

  public clickMessage: string = '';

  onClickMe() {
    this.clickMessage = 'Hello Angular 2';
  }

}
