// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-counter',
//   template: `
//     <div class="counter">
//       <button (click)="onIncrement()">Increment</button>
//       <button (click)="onDecrement()">Decrement</button>
//       <button (click)="onIncrementIfOdd()">Increment If Odd</button>
//       <button (click)="reset()">重設</button>
//       <h3>{{ counter$ | async }}</h3>
//     </div>
//   `
// })
// export class CounterComponent {
//   public counter$: Observable<number>;
//
//   constructor(private store: Store<number>) {
//     this.counter$ = this.store.select<number>('counter');
//   }
//
//   increment(): void {
//     this.store.dispatch(increment());
//   }
//
//   decrement(): void {
//     this.store.dispatch(decrement());
//   }
//
//   incrementIfOdd(): void {
//     this.store.dispatch(incrementIfOdd());
//   }
// }
