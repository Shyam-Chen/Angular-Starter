import { Component } from 'angular2/core';

@Component({
  template: `
    <button (click)="onClickMe()">Click Me</button>
    <p>{{clickMessage}}</p>
  `
})
export class ClickMeComponent {

  clickMessage = '';

  onClickMe() {
    this.clickMessage = 'Angular 2';
  }

}
