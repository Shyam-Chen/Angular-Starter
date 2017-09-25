import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h3>Angular by Example</h3>

    <nav>
      <a routerLink="counter" routerLinkActive="active">Counter</a>
      <a routerLink="rest" routerLinkActive="active">REST</a>
    </nav>

    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
