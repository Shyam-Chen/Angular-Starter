import { Component } from '@angular/core';

import { RESTStore } from './rest.store';

@Component({
  selector: 'rest-dialog-delete',
  template: `
    <p>Are you sure you want to delete it?</p>

    <button md-button color="accent" [md-dialog-close]="true">Cancel</button>
    <button
      md-button
      color="primary"
      [md-dialog-close]="true"
      (click)="this.rest.deleteItem(this.rest.deleteData._id)"
    >
      Confirm
    </button>
  `
})
export class AppRESTDeleteDialogComponent {
  constructor(private rest: RESTStore) {}
}
