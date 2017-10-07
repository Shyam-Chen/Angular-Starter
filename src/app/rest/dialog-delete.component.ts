import { Component } from '@angular/core';

import { RESTStore } from './rest.store';

@Component({
  selector: 'rest-dialog-delete',
  template: `
    <p>Are you sure you want to delete it?</p>

    <button md-button color="accent" [md-dialog-close]="true">Cancel</button>
    <button md-button color="primary" [md-dialog-close]="true" (click)="rest.deleteItem(rest.deleteData._id)">Confirm</button>
  `
})
export class DialogDeleteComponent {
  constructor(public rest: RESTStore) {}
}
