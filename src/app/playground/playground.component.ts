import { Component } from '@angular/core';

import { PlaygroundStore } from './playground.store';

@Component({
  selector: 'playground',
  template: `
    <div *mobxAutorun="{ dontDetach: true }">
      <div class="ans-nav">
        <div class="ans-nav__links">
          <mat-card class="ans-nav__link" routerLink="counter">Counter</mat-card>
        </div>
      </div>
    </div>
  `
})
export class PlaygroundComponent {
  constructor(public $p: PlaygroundStore) {}
}
