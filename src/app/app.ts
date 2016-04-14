import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { HelloWorldComponent } from './hello-world/hello-world';
import { ClickMeComponent } from './click-me/click-me';
import { TodoListComponent } from './todo-list/todo-list';
import { WikiComponent } from './wiki/wiki';

import { HighlightDirective } from './shared/directives/highlight';

@Component({
  selector: 'app',
  template: `
    <h3 class="title">Hello World Component</h3>
    <hello-world></hello-world>

    <h3 class="title">Component Router</h3>
    <nav>
      <a [routerLink]="['ClickMe']">Click Me</a> /
      <a [routerLink]="['TodoList']">Todo List</a>
    </nav>
    <br>
    <router-outlet></router-outlet>

    <h3 class="title">Component HTTP</h3>
    <wiki></wiki>

    <h3 class="title">Attribute Directive</h3>
    <p>Pick a highlight color</p>
    <form>
      <input type="radio" name="colors" (click)="color='lightgreen'">Green
      <input type="radio" name="colors" (click)="color='yellow'">Yellow
      <input type="radio" name="colors" (click)="color='cyan'">Cyan
    </form>
    <span [highlight]="color">Highlight Me!</span>
  `,
  styles: [`
    .title {
      color: #3F51B5;
    }
  `],
  directives: [
    HelloWorldComponent,
    ROUTER_DIRECTIVES,
    WikiComponent,
    HighlightDirective
  ],
  viewProviders: [],
  pipes: []
})
@RouteConfig([{
    path: '/click-me',
    name: 'ClickMe',
    component: ClickMeComponent
  }, {
    path: '/todo-list',
    name: 'TodoList',
    component: TodoListComponent
}])
export class App {

  constructor() {
    // ...
  }

}
