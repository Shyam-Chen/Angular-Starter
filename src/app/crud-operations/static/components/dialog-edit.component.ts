import { Component, Inject } from '@angular/core';

import { StaticStore } from '../static.store';

@Component({
  selector: 'app--crud-operations--static-edit',
  template: `
    <mat-form-field>
      <input matInput placeholder="Primary" [(ngModel)]="$static.editData.primary">
    </mat-form-field>

    <mat-form-field>
      <input matInput placeholder="Accent" [(ngModel)]="$static.editData.accent">
    </mat-form-field>

    <button mat-button color="accent" [mat-dialog-close]="true">Cancel</button>
    <button mat-button color="primary" [mat-dialog-close]="true" (click)="save()">Save</button>
  `
})
export class DialogEditComponent {
  constructor(public $static: StaticStore) {}

  public save(): void {
    const { primary, accent } = this.$static.editData;

    if (!!primary && !!accent) {
      this.$static.editItem(this.$static.editData);
    }
  }
}
