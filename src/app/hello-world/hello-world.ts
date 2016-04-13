import { Component } from 'angular2/core';

@Component({
  selector: 'hello-world',
  template: `
    <label>Name:</label>
    <input type="text" [(ngModel)]="yourName" placeholder="Enter a name here">
    <p [hidden]="!yourName">Hello {{ yourName }}!</p>
  `
})
export class HelloWorldComponent {

  yourName: string = '';

}
