import { Component } from '@angular/core';

@Component({
  selector: 'hello-angular',
  template: `
    <button (click)="onClick()">Click Me</button>
    <p>{{ message }}</p>
  `
})
export class HelloAngularComponent {
  public message: string;

  public onClick(): void {
    this.message = 'Hello Angular 2';
  }
}
