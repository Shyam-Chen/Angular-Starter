import { Component } from '@angular/core';

import { StaticStore } from '../static.store';

@Component({
  selector: 'app-crud-operations-static-delete',
  template: `
    <p>Are you sure you want to delete it?</p>

    <button mat-button color="accent" [mat-dialog-close]="true">Cancel</button>
    <button mat-button color="primary" [mat-dialog-close]="true" (click)="$static.deleteItem($static.deleteData.id)">Confirm</button>
  `
})
export class DialogDeleteComponent {
  constructor(public $static: StaticStore) {}
}
