import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { CounterModel } from './counter.model';
import { Increment } from './counter.action';

@Component({
  selector: 'counter',
  template: `
    <div>
      <div>Clicked: {{ value | async }} times</div>
      <button (click)="onIncrement()">Increment</button>
    </div>
  `,
})
export class CounterComponent {
  @Select('counter.value') value: Observable<CounterModel>;

  constructor(private store: Store) {}

  onIncrement() {
    this.store.dispatch(new Increment());
  }
}
