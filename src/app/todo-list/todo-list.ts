import { Component } from 'angular2/core';

@Component({
  templateUrl: './app/todo-list/todo-list.html',
  styleUrls: ['./app/todo-list/todo-list.css']
})
export class TodoListComponent {

  public list: string[] = ['Angular', 'Material', 'Firebase'];

  addItem(newItem: string) {
    if (newItem) {
      this.list.push(newItem);
    }
  }

}
