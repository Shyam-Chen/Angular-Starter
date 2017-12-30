import { Component } from '@angular/core';

import { CRUDOperationsStore } from './crud-operations.store';

@Component({
  selector: 'crud-operations',
  template: `
    <div *mobxAutorun="{ dontDetach: true }">
      <div class="ans-nav">
        <div class="ans-nav__links">
          <mat-card class="ans-nav__link" routerLink="static">Static</mat-card>
          <mat-card class="ans-nav__link" routerLink="rest">REST</mat-card>
          <mat-card class="ans-nav__link ans-nav__link--disabled">GraphQL</mat-card>
        </div>
      </div>
    </div>
  `,
  styles: [``]
})
export class CRUDOperationsComponent {
  constructor(public crudOperations: CRUDOperationsStore) {}
}
