import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';

import { RESTStore } from './rest.store';
import { DialogEditComponent } from './components/dialog-edit.component';
import { DialogDeleteComponent } from './components/dialog-delete.component';

@Component({
  selector: 'app-rest',
  template: `
    <div *mobxAutorun="{ dontDetach: true }">
      <div>
        <mat-input-container>
          <input matInput placeholder="Text" [(ngModel)]="rest.searchData.text">
        </mat-input-container>

        <button mat-raised-button (click)="rest.searchItem(rest.searchData.text)">Search</button>
      </div>

      <div>
        <mat-input-container>
          <input matInput placeholder="Text" [(ngModel)]="rest.addData.text">
        </mat-input-container>

        <button mat-raised-button (click)="rest.addItem(rest.addData.text)">Add</button>
      </div>

      <div class="progress" [ngStyle]="{ display: rest.progress }">
        <mat-progress-bar color="accent" mode="indeterminate"></mat-progress-bar>
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
            <tr *ngIf="rest.dataset.length === 0">
              <td colspan="2" style="text-align: center">No data available</td>
            </tr>
            <tr *ngFor="let item of rest.dataset | reverse">
              <td>{{ item.text }}</td>
              <td>
                <button mat-button color="accent" (click)="openDeleteDialog(item._id)">Delete</button>
                <button mat-button color="primary" (click)="openEditDialog(item._id, item.text)">Edit</button>
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
  `]
})
export class RESTComponent {
  constructor(
    public rest: RESTStore,
    public editDialog: MatDialog,
    public deleteDialog: MatDialog
  ) {}

  public openEditDialog(_id: string, text: string): void {
    this.editDialog.open(DialogEditComponent);
    this.rest.editData._id = _id;
    this.rest.editData.text = text;
  }

  public openDeleteDialog(_id: string): void {
    this.deleteDialog.open(DialogDeleteComponent);
    this.rest.deleteData._id = _id;
  }
}
