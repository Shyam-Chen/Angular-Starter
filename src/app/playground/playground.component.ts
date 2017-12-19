import { Component } from '@angular/core';

@Component({
  selector: 'app-playground',
  template: `
    <div>
      <button mat-raised-button color="primary" routerLink="counter" routerLinkActive="active">Counter</button>
    </div>
  `
})
export class PlaygroundComponent {}
