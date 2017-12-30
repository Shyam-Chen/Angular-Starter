import { Component } from '@angular/core';

import { DataTableStore } from './data-table.store';

@Component({
  selector: 'data-table',
  template: `
    <div *mobxAutorun="{ dontDetach: true }">
      <div class="ans-nav">
        <div class="ans-nav__links">
          <mat-card class="ans-nav__link ans-nav__link--disabled">Static</mat-card>
          <mat-card class="ans-nav__link ans-nav__link--disabled">REST</mat-card>
          <mat-card class="ans-nav__link ans-nav__link--disabled">GraphQL</mat-card>
        </div>
      </div>
    </div>
  `,
  styles: [``]
})
export class DataTableComponent {
  constructor(public $dt: DataTableStore) {}
}
