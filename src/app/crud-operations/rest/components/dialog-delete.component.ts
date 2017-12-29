import { Component } from '@angular/core';

import { RESTStore } from '../rest.store';

@Component({
  selector: 'crud-operations--rest-dialog-delete',
  template: `
    <p>Are you sure you want to delete it?</p>

    <button mat-button color="accent" [mat-dialog-close]="true">Cancel</button>
    <button mat-button color="primary" [mat-dialog-close]="true" (click)="rest.deleteItem(rest.deleteData._id)">Confirm</button>
  `
})
export class DialogDeleteComponent {
  constructor(public rest: RESTStore) {}
}
