import { Component } from '@angular/core';

import { CounterStore } from './counter.store';

@Component({
  selector: 'app-counter',
  template: `
    <div *mobxAutorun>
      <p>Clicked: {{ counter.value }} times, value is {{ counter.evenOrOdd }}.</p>
      <button mat-raised-button (click)="counter.increment()">Increment</button>
      <button mat-raised-button (click)="counter.decrement()">Decrement</button>
      <button mat-raised-button (click)="counter.incrementAsync()">Increment (Async)</button>
      <button mat-raised-button (click)="counter.decrementAsync()">Decrement (Async)</button>
      <button mat-raised-button (click)="counter.incrementIfOdd()">Increment (If Odd)</button>
      <button mat-raised-button (click)="counter.decrementIfEven()">Decrement (If Even)</button>
    </div>
  `,
  styles: [``]
})
export class CounterComponent {
  constructor(private counter: CounterStore) {}
}
