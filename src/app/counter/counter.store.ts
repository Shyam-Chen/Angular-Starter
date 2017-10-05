import { Injectable } from '@angular/core';
import { observable, action, computed } from 'mobx';

@Injectable()
export class CounterStore {
  @observable value: number = 0;

  @action
  increment(): void {
    this.value++;
  }

  @action
  decrement(): void {
    this.value--;
  }

  @action
  incrementAsync(): void {
    setTimeout(() => this.increment(), 1000);
  }

  @action
  incrementIfOdd(): void {
    if (Math.abs(this.value % 2) === 1) {
      this.increment();
    }
  }

  @computed
  get evenOrOdd(): string {
    return this.value % 2 === 0 ? 'even' : 'odd';
  }
}
