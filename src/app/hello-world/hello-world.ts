import { Component } from 'angular2/core';

@Component({
  selector: 'hello-world',
  template: `
    <button (click)="onClickMe()">Click Me</button>
    <p>{{ clickMessage }}</p>
  `
})
export class HelloWorldComponent {
  public clickMessage: string = '';

  onClickMe() {
    this.clickMessage = 'Hello Angular 2';
  }
}
