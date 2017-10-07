import { Component, Inject } from '@angular/core';

import { RESTStore } from './rest.store';

@Component({
  selector: 'rest-dialog-edit',
  template: `
    <md-input-container>
      <input mdInput placeholder="Text" [(ngModel)]="rest.editData.text">
    </md-input-container>

    <button md-button color="accent" [md-dialog-close]="true">Cancel</button>
    <button md-button color="primary" [md-dialog-close]="true" (click)="save()">Save</button>
  `
})
export class DialogEditComponent {
  constructor(public rest: RESTStore) {}

  public save(): void {
    if (this.rest.editData.text) {
      this.rest.editItem(this.rest.editData._id, this.rest.editData.text);
    }
  }
}
