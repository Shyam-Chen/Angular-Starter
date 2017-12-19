import { Component } from '@angular/core';

import { StaticStore } from './static.store';

@Component({
  selector: 'app-crud-operations',
  template: `
    <div class="container" *mobxAutorun="{ dontDetach: true }">

      <div>
        <mat-form-field class="example-full-width">
          <input matInput placeholder="Primary">
        </mat-form-field>

        <mat-form-field class="example-full-width">
          <input matInput placeholder="Accent">
        </mat-form-field>

        <button mat-raised-button color="primary">Search</button>
      </div>

      <div>
        <mat-form-field class="example-full-width">
          <input matInput placeholder="Primary">
        </mat-form-field>

        <mat-form-field class="example-full-width">
          <input matInput placeholder="Accent">
        </mat-form-field>

        <button mat-raised-button color="primary">Add</button>
      </div>

    </div>
  `,
  styles: [``]
})
export class StaticComponent {
  constructor(public $static: StaticStore) {}
}
