import { Component } from '@angular/core';

import { PlaygroundStore } from './playground.store';

@Component({
  selector: 'app-playground',
  template: `
    <div *mobxAutorun="{ dontDetach: true }">
      <button mat-raised-button color="primary" routerLink="counter" routerLinkActive="active">Counter</button>
    </div>
  `
})
export class PlaygroundComponent {
  constructor(public $playground: PlaygroundStore) {}
}
