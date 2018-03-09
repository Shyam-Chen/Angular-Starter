import { Component } from '@angular/core';

import { CounterStore } from './counter.store';

@Component({
  selector: 'playground--counter',
  templateUrl: './counter.component.pug',
  styleUrls: ['./counter.component.styl'],
})
export class CounterComponent {
  constructor(public counter: CounterStore) {}
}
