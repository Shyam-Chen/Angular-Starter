import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h3>Angular by Example</h3>

    <nav>
      <button md-raised-button color="primary" routerLink="counter" routerLinkActive="active">Counter</button>
      <button md-raised-button color="primary" routerLink="rest" routerLinkActive="active">REST</button>
    </nav>

    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
