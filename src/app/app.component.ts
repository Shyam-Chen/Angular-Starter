import { Component, OnInit } from '@angular/core';

import { TransferState } from '../transfer-state';

@Component({
  selector: 'app-root',
  template: `
    <h1>Universal Web Application</h1>
    <a routerLink="/">Home</a>
    <a routerLink="/about">About</a>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  constructor(private cache: TransferState) { }

  ngOnInit() {
    this.cache.set('cached', true);
  }
}
