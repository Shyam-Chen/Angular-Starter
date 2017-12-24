import { Component } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary" class="mat-elevation-z4 toolbar" style="z-index: 10">
      <div style="width: 2.5rem; height: 2.5rem; outline: none; cursor: pointer;" routerLink="">
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

      <span class="title" routerLink="" style="outline: none; cursor: pointer;">AngularNest by Example</span>
    </mat-toolbar>

    <mat-sidenav-container>
      <mat-sidenav mode="side" opened="true" style="width: 240px; height: 100vh; box-sizing: border-box; box-shadow: 3px 0 6px rgba(0,0,0,.24);">
        <div class="filling"></div>

        <nav style="margin: 0; padding: 0;">
          <h3 class="category">CRUD Operations</h3>
          <ul class="variety">
            <li class="enable" routerLink="crud-operations/static">Static</li>
            <li class="enable" routerLink="crud-operations/rest">REST</li>
            <li class="disabled">GraphQL</li>
          </ul>

          <h3 class="category">Form Controls</h3>
          <ul class="variety">
            <li class="enable" routerLink="form-controls/template-driven">Template-driven</li>
            <li class="enable" routerLink="form-controls/reactive-forms">Reactive Forms</li>
          </ul>

          <h3 class="category">Data Table</h3>
          <ul class="variety">
            <li class="disabled">Static</li>
            <li class="disabled">REST</li>
            <li class="disabled">GraphQL</li>
          </ul>

          <h3 class="category">Globalization</h3>
          <ul class="variety">
            <li class="disabled">Internationalization</li>
            <li class="disabled">Localization</li>
          </ul>

          <h3 class="category">Authorization</h3>
          <ul class="variety">
            <li class="disabled">REST</li>
            <li class="disabled">GraphQL</li>
          </ul>

          <h3 class="category">Data Chart</h3>
          <ul class="variety">
            <li class="disabled">SVG</li>
            <li class="disabled">Canvas</li>
            <li class="disabled">WebGL</li>
          </ul>

          <h3 class="category">Realtime</h3>
          <ul class="variety">
            <li class="disabled">WebSockets</li>
            <li class="disabled">GraphQL Subscriptions</li>
          </ul>

          <h3 class="category">Playground</h3>
          <ul class="variety">
            <li class="enable" routerLink="playground/counter">Counter</li>
          </ul>
        </nav>
      </mat-sidenav>

      <mat-sidenav-content class="content">
        <div class="filling"></div>

        <header>
          <div>Examples {{ location.path() }}</div>

        </header>

        <div class="container" *ngIf="location.path() === ''">
          <div class="plane">
            <div class="plane__cards">
              <mat-card class="plane__card" routerLink="crud-operations">CRUD Operations</mat-card>
              <mat-card class="plane__card" routerLink="form-controls">Form Controls</mat-card>
              <mat-card class="plane__card plane__card--disabled" routerLink="">Data Table</mat-card>
              <mat-card class="plane__card plane__card--disabled" routerLink="">Globalization</mat-card>
              <mat-card class="plane__card plane__card--disabled" routerLink="">Authorization</mat-card>
              <mat-card class="plane__card plane__card--disabled" routerLink="">Data Chart</mat-card>
              <mat-card class="plane__card plane__card--disabled" routerLink="">Realtime</mat-card>
              <mat-card class="plane__card" routerLink="playground">Playground</mat-card>
            </div>
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
            Learn Angular | Learn Nest
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
      margin-left: .5rem;
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
      list-style-type: none;
      margin: 0;
      padding: 0;
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
      border-bottom-width: 1px;
      border-bottom-style: solid;
      border-color: rgba(0, 0, 0, .06);
    }

    .enable {
      cursor: pointer;
      outline: none;
    }

    .disabled {
      color: rgba(0, 0, 0, .2);
      cursor: not-allowed;
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

    .plane {
      display: flex;
      justify-content: center;
    }

    .plane__cards {
      display: flex;
      flex-flow: row wrap;
    }

    .plane__card {
      width: 12.5rem;
      margin: 20px;
    }

    .plane__card--disabled {
      background-color: rgba(0, 0, 0, .12);
      color: rgba(0, 0, 0, .38);
      cursor: not-allowed;
    }

    header {
      background: #3f51b5;
      font-family: 'Roboto';
      font-weight: 300;
      padding: 28px;
      font-size: 20px;
      box-sizing: border-box;
      color: hsla(0,0%,100%,.87);
    }

    footer {
      height: 77px;
      margin-top: 40px;
      padding: 12px;
      font-size: 12px;
      background: #3f51b5;
      color: hsla(0,0%,100%,.87);
    }
  `]
})
export class AppComponent {
  public location: Location;

  constructor(location: Location) {
    this.location = location;
  }
}
