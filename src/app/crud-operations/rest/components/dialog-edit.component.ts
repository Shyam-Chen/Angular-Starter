import { Component, Inject } from '@angular/core';

import { RESTStore } from '../rest.store';

@Component({
  selector: 'crud-operations--rest-dialog-edit',
  template: `
    <mat-input-container>
      <input matInput placeholder="Text" [(ngModel)]="rest.editData.text">
    </mat-input-container>

    <button mat-button color="accent" [mat-dialog-close]="true">Cancel</button>
    <button mat-button color="primary" [mat-dialog-close]="true" (click)="save()">Save</button>
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
