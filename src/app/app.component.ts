import { Component } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
    <md-toolbar color="primary" class="mat-elevation-z4 toolbar">
      <div *ngIf="location.path() === ''; else locationBack">
        <button md-icon-button>
          <md-icon class="md-24" aria-label="Toys">toys</md-icon>
        </button>
      </div>
      <ng-template #locationBack>
        <button md-icon-button (click)="location.back()">
          <md-icon class="md-24" aria-label="Arrow Back">arrow_back</md-icon>
        </button>
      </ng-template>

      <span class="title">Angular by Example</span>
    </md-toolbar>

    <div class="filling"></div>

    <div *ngIf="location.path() === ''">
      <nav>
        <button md-raised-button color="primary" routerLink="counter" routerLinkActive="active">Counter</button>
        <button md-raised-button color="primary" routerLink="rest" routerLinkActive="active">REST</button>
      </nav>
    </div>

    <router-outlet></router-outlet>
  `,
  styles: [`
    .toolbar {
      top: 0;
      left: auto;
      right: 0;
      position: fixed;
      width: 100%;
    }

    .title {
      margin-left: 1rem;
    }

    .filling {
      padding-top: 64px;
    }
  `]
})
export class AppComponent {
  public location: Location;

  constructor(location: Location) {
    this.location = location;
    console.log(location.path())
  }
}
