import { Component } from '@angular/core';

import { CRUDOperationsStore } from './crud-operations.store';

@Component({
  selector: 'app-crud-operations',
  template: `
    <div class="container" *mobxAutorun="{ dontDetach: true }">

      <button mat-raised-button color="primary" routerLink="static" routerLinkActive="active">Static</button>
      <button mat-raised-button color="primary" routerLink="rest" routerLinkActive="active">REST</button>

    </div>
  `,
  styles: [``]
})
export class CRUDOperationsComponent {
  constructor(public crudOperations: CRUDOperationsStore) {}
}
