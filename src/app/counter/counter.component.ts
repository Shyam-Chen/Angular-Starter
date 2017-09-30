import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

// import { Counter } from './model';
// import { increment, decrement } from './actions';

@Component({
  selector: 'app-counter',
  template: `
    <div class="counter">
      // TODO:  Counter
      <!-- <button md-raised-button (click)="onIncrement()">Increment</button>
      <button md-raised-button (click)="onDecrement()">Decrement</button>
      <h3>{{ value$ }}</h3> -->
    </div>
  `,
  styles: [``]
})
export class CounterComponent {
  // public value$: Observable<number>;
  //
  // constructor(private store: Store<any>) {
  //   this.value$ = store.select(({ counter }) => counter.value);
  // }
  //
  // public onIncrement() {
  //   this.store.dispatch(increment());
  // }
  //
  // public onDecrement() {
  //   this.store.dispatch(decrement());
  // }
}
