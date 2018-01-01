import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { AppStore } from './app.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  constructor(public $app: AppStore, public location: Location) {}
}
