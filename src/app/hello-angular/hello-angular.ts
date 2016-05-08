import { Component } from '@angular/core';

@Component({
  selector: 'hello-angular',
  template: `
    <button (click)="onClick()">Click Me</button>
    <p>{{ message }}</p>
  `
})
export class HelloAngularComponent {
  public message: string = '';

  onClick() {
    this.message = 'Hello Angular';
  }
}
