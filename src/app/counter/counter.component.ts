import { Component } from '@angular/core';

import { CounterStore } from './counter.store';

@Component({
  selector: 'app-counter',
  template: `
    <div *mobxAutorun>
      Clicked: {{ counter.value }} times, value is {{ counter.evenOrOdd }}.
      <button md-raised-button (click)="counter.increment()">Increment</button>
      <button md-raised-button (click)="counter.decrement()">Decrement</button>
      <button md-raised-button (click)="counter.incrementAsync()">Increment (Async)</button>
      <button md-raised-button (click)="counter.incrementIfOdd()">Increment (If Odd)</button>
    </div>
  `,
  styles: [``]
})
export class CounterComponent {
  constructor(private counter: CounterStore) {}
}
