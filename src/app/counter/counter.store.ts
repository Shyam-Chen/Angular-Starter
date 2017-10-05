import { Injectable } from '@angular/core';
import { observable, action, computed, reaction } from 'mobx';

@Injectable()
export class CounterStore {
  @observable value: number = 0;

  @action
  increment() {
    this.value++;
  }

  @action
  decrement() {
    this.value--;
  }
}
