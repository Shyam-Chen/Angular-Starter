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

          <h3 class="category">Data Table</h3>
          <ul class="variety" style="list-style-type: none; margin: 0; padding: 0;">
            <li>Static</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>

          <h3 class="category">Globalization</h3>
          <ul class="variety" style="list-style-type: none; margin: 0; padding: 0;">
            <li>Internationalization</li>
            <li>Localization</li>
          </ul>

          <h3 class="category">Authorization</h3>
          <ul class="variety" style="list-style-type: none; margin: 0; padding: 0;">
            <li>REST</li>
            <li>GraphQL</li>
          </ul>

          <h3 class="category">Data Chart</h3>
          <ul class="variety" style="list-style-type: none; margin: 0; padding: 0;">
            <li>SVG</li>
            <li>Canvas</li>
            <li>WebGL</li>
          </ul>

          <h3 class="category">Realtime</h3>
          <ul class="variety" style="list-style-type: none; margin: 0; padding: 0;">
            <li>WebSockets</li>
            <li>GraphQL Subscriptions</li>
          </ul>

          <h3 class="category">Playground</h3>
          <ul class="variety" style="list-style-type: none; margin: 0; padding: 0;">
            <li>Counter</li>
            <li>...</li>
          </ul>
        </nav>
      </mat-sidenav>

      <mat-sidenav-content class="content">
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

        <footer>
          <div style="width: 50px">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 250 250" style="enable-background:new 0 0 250 250" xml:space="preserve">
              <g>
                <g>
                  <polygon fill="#fff" points="125,153.4 100.3,153.4 88.6,182.6 88.6,182.6 66.9,182.6 66.8,182.6 125,52.1 125,52.2 125,52.2 125,30 125,30 31.9,63.2 46.1,186.3 125,230 125,230 125,153.4"/>
                  <polygon fill="#fff" points="108,135.4 125,135.4 125,135.4 125,94.5"/>
                </g>
                <g opacity=".9">
                  <polygon fill="#fff" points="125,153.4 149.7,153.4 161.4,182.6 161.4,182.6 183.1,182.6 183.2,182.6 125,52.1 125,52.2 125,52.2 125,30 125,30 218.1,63.2 203.9,186.3 125,230 125,230 125,153.4"/>
                  <polygon fill="#fff" points="142,135.4 125,135.4 125,135.4 125,94.5"/>
                </g>
              </g>
            </svg>
          </div>

          <div>
            Learn Angular
          </div>
        </footer>
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

    .content {
      height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .container {
      padding: 1rem;
      flex: 1 0 auto;
    }

    footer {
      margin-top: 40px;
      padding: 12px;
      font-size: 12px;
      background: #3f51b5;
      color: hsla(0,0%,100%,.87);
      display: flex;
      flex-direction: row;
    }
  `]
})
export class AppComponent {
  public location: Location;

  constructor(location: Location) {
    this.location = location;
  }
}
