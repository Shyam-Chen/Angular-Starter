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

    <mat-sidenav-container>
      <mat-sidenav mode="side" opened="true" style="width: 240px; height: 100vh; box-sizing: border-box; box-shadow: 3px 0 6px rgba(0,0,0,.24);">
        <div class="filling"></div>

        <nav style="margin: 0; padding: 0;">
          <h3 class="category">CRUD Operations</h3>

          <ul class="variety" style="list-style-type: none; margin: 0; padding: 0;">
            <li>Static</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>

          <h3 class="category">Form Controls</h3>

          <ul class="variety" style="list-style-type: none; margin: 0; padding: 0;">
            <li>Template-driven</li>
            <li>Reactive Forms</li>
          </ul>
        </nav>
      </mat-sidenav>

      <mat-sidenav-content style="height: 100vh">
        <div class="filling"></div>

        <div class="container" *ngIf="location.path() === ''">
          <div>
            <button mat-raised-button color="primary" routerLink="crud-operations" routerLinkActive="active">CRUD Operations</button>
            <button mat-raised-button color="primary" routerLink="form-controls" routerLinkActive="active">Form Controls</button>
            <button mat-raised-button color="primary" disabled routerLink="data-table" routerLinkActive="active">Data Table</button>
            <button mat-raised-button color="primary" disabled routerLink="globalization" routerLinkActive="active">Globalization</button>
            <button mat-raised-button color="primary" disabled routerLink="authorization" routerLinkActive="active">Authorization</button>
            <button mat-raised-button color="primary" disabled routerLink="data-chart" routerLinkActive="active">Data Chart</button>
            <button mat-raised-button color="primary" disabled routerLink="Realtime" routerLinkActive="active">Realtime</button>
          </div>

          <br>

          <div>
            <button mat-raised-button color="accent" routerLink="playground" routerLinkActive="active">Playground</button>
          </div>
        </div>

        <div class="container">
          <router-outlet></router-outlet>
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
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

    .category {
      font-size: 10px;
      letter-spacing: 1px;
      line-height: 24px;
      text-transform: uppercase;
      font-weight: 400;
      margin: 0;
      padding: 0 16px;
      background: rgba(0,0,0,.32);
      color: hsla(0,0%,100%,.87);
    }

    .variety {
      border-bottom-width: 1px;
      border-bottom-style: solid;
      margin: 0;
      padding: 0;
      border-color: rgba(0,0,0,.06);
      color: rgba(0,0,0,.54);
    }

    .variety > li {
      box-sizing: border-box;
      display: block;
      font-size: 14px;
      font-weight: 400;
      line-height: 47px;
      text-decoration: none;
      transition: all .3s;
      padding: 0 16px;
      position: relative;
    }

    .container {
      padding: 1rem;
    }
  `]
})
export class AppComponent {
  public location: Location;

  constructor(location: Location) {
    this.location = location;
  }
}
