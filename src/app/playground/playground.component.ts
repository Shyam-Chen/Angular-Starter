import { Component } from '@angular/core';

@Component({
  selector: 'app-playground',
  template: `
    <nav>
      <button mat-raised-button color="primary" routerLink="counter" routerLinkActive="active">Counter</button>
    </nav>
  `
})
export class PlaygroundComponent {}
