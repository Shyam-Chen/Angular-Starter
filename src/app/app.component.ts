import { Component } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary" class="mat-elevation-z4 toolbar" style="z-index: 10">
      <div *ngIf="location.path() === ''; else locationBack">
        <button mat-icon-button>
          <mat-icon class="mat-24" aria-label="Toys">toys</mat-icon>
        </button>
      </div>
      <ng-template #locationBack>
        <button mat-icon-button (click)="location.back()">
          <mat-icon class="mat-24" aria-label="Arrow Back">arrow_back</mat-icon>
        </button>
      </ng-template>

      <span class="title">Angular by Example</span>
    </mat-toolbar>

    <div class="filling"></div>

    <div *ngIf="location.path() === ''">
      <nav>
        <button mat-raised-button color="primary" routerLink="counter" routerLinkActive="active">Counter</button>
        <button mat-raised-button color="primary" routerLink="rest" routerLinkActive="active">REST</button>
        <button mat-raised-button color="primary" routerLink="form-controls" routerLinkActive="active">Form Controls</button>
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
  }
}
