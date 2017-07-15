
import { Component } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Store } from '@ngrx/store';

import { CounterState, increment, decrement, reset, incrementIfOdd, decrementIfEven } from './counter';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter</h3>
    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>
    <button (click)="reset()">Reset</button>
    <button (click)="incrementIfOdd()">Increment (If Odd)</button>
    <button (click)="decrementIfEven()">Decrement (If Even)</button>
    <p>Current Count: {{ counter$ | async }}</p>
  `
})
export class CounterComponent {
  public counter$: Observable<number>;

  constructor(private store: Store<CounterState>) {
    this.counter$ = store.select('counter');
  }

  public increment(): void {
    this.store.dispatch(increment());
  }

  public decrement(): void {
    this.store.dispatch(decrement());
  }

  public reset(): void {
    this.store.dispatch(reset());
  }

  public incrementIfOdd(): void {
    this.store.dispatch(incrementIfOdd());
  }

  public decrementIfEven(): void {
    this.store.dispatch(decrementIfEven());
  }
}
