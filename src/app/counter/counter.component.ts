import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action, Store } from '@ngrx/store';

import { Counter } from './model';
import { onIncrement, onDecrement } from './actions';

@Component({
  selector: 'app-counter',
  template: `
    <div class="counter">
      <button (click)="onIncrement()">Increment</button>
      <button (click)="onDecrement()">Decrement</button>
      <button (click)="onIncrementAsync()">Increment (Async)</button>
      <button (click)="onIncrementIfOdd()">Increment (If Odd)</button>
      <h3>{{ counter$ }}</h3>
    </div>
  `
})
export class CounterComponent {
  public counter$: Observable<number>;

  constructor(private store: Store<Counter>) {
    this.counter$ = store.select('value');
    console.log(this.counter$)
  }

  onIncrement(): void {
    this.store.dispatch(onIncrement());
  }

  onDecrement(): void {
    this.store.dispatch(onDecrement());
  }

  onIncrementAsync(): void {
    // this.store.dispatch(onIncrementAsync());
  }

  onIncrementIfOdd(): void {
    // this.store.dispatch(incrementIfOdd());
  }
}
