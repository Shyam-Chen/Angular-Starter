import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h3>Angular by Example</h3>

    <app-rest></app-rest>
    <app-counter></app-counter>
  `,
  styles: [``]
})
export class AppComponent implements OnInit {
  ngOnInit() {
    // ...
  }
}
