import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/filter';

import { Injectable } from '@angular/core';
import { observable, action, computed } from 'mobx';
import { Observable } from 'rxjs/Observable';

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
  decrementAsync(): void {
    Observable.of(null)
      .delay(1000)
      .subscribe(() => this.decrement());
  }

  @action
  incrementIfOdd(): void {
    if (Math.abs(this.value % 2) === 1) {
      this.increment();
    }
  }

  @action
  decrementIfEven(): void {
    Observable.of(null)
      .filter(() => this.value % 2 === 0)
      .subscribe(() => this.decrement());
  }

  @computed
  get evenOrOdd(): string {
    return this.value % 2 === 0 ? 'even' : 'odd';
  }
}
