import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { CounterStore } from './counter.store';

@Component({
  selector: 'app-counter',
  template: `
    <div class="counter">
      <div *mobxAutorun>
        Clicked: {{ counter.value }} times
        <button md-raised-button (click)="counter.increment()">Increment</button>
        <button md-raised-button (click)="counter.decrement()">Decrement</button>
      </div>
    </div>
  `,
  styles: [``]
})
export class CounterComponent {
  constructor(private counter: CounterStore) {}
}
