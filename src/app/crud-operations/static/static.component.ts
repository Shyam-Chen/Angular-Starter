import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material';

import { StaticStore } from './static.store';
import { DialogDeleteComponent } from './components/dialog-delete.component';

@Component({
  selector: 'app-crud-operations',
  template: `
    <div class="container" *mobxAutorun="{ dontDetach: true }">

      <div>
        <mat-form-field class="example-full-width">
          <input matInput placeholder="Primary" [(ngModel)]="$static.searchData.primary">
        </mat-form-field>

        <mat-form-field class="example-full-width">
          <input matInput placeholder="Accent" [(ngModel)]="$static.searchData.accent">
        </mat-form-field>

        <button mat-raised-button color="primary" (click)="$static.searchItem($static.searchData.primary, $static.searchData.accent)">Search</button>
      </div>

      <div>
        <mat-form-field class="example-full-width">
          <input matInput placeholder="Primary" [(ngModel)]="$static.addData.primary">
        </mat-form-field>

        <mat-form-field class="example-full-width">
          <input matInput placeholder="Accent" [(ngModel)]="$static.addData.accent">
        </mat-form-field>

        <button mat-raised-button color="primary" (click)="$static.addItem($static.addData.primary, $static.addData.accent)">Add</button>
      </div>

      <div>
        <table class="md-table">
          <thead>
            <tr>
              <th>Text</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let item of $static.dataset">
              <td>{{ item.primary }}</td>
              <td>{{ item.accent }}</td>
              <td>
                <button mat-button color="accent" (click)="openDeleteDialog(item.id)">Delete</button>
                <button mat-button color="primary">Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  `,
  styles: [`
    .md-table {
      width: 25rem;
      border-collapse: collapse;
      white-space: nowrap;
      background: #fff;
      box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
    }

    .md-table th,
    .md-table td {
      padding: 15px;
    }

    .md-table th {
      border-top: 1px solid rgba(0,0,0,0.1);
      border-bottom: 1px solid rgba(0,0,0,0.1);
    }

    .md-table td {
      border: none;
      border-bottom: 1px solid rgba(0,0,0,0.1);
    }

    .md-table tbody tr {
      transition-duration: 0.28s;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-property: background-color;
    }

    .md-table tbody tr:hover {
      background-color: #eee;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StaticComponent {
  constructor(
    public $static: StaticStore,
    public deleteDialog: MatDialog
  ) {}

  public openDeleteDialog(id: number): void {
    this.deleteDialog.open(DialogDeleteComponent);
    this.$static.deleteData.id = id;
  }
}
