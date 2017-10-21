import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';

import { RESTStore } from './rest.store';
import { DialogEditComponent } from './components/dialog-edit.component';
import { DialogDeleteComponent } from './components/dialog-delete.component';

@Component({
  selector: 'app-rest',
  template: `
    <div *mobxAutorun>
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

      <mat-card id="list">
        <mat-list>
          <mat-list-item *ngFor="let item of rest.dataset | reverse">
            <span>{{ item.text }}　</span>
            <button mat-button color="accent" (click)="openDeleteDialog(item._id)">Delete</button>
            <button mat-button color="primary" (click)="openEditDialog(item._id, item.text)">Edit</button>
          </mat-list-item>
        </mat-list>
      </mat-card>

      <div class="progress" [ngStyle]="{ display: rest.progress }">
        <mat-spinner></mat-spinner>
      </div>
    </div>
  `,
  styles: [`
    #list {
      width: 25rem;
    }

    .progress {
      position: absolute;
      position: fixed;
      top: 0;
      left: 0;
      background: rgba(225, 225, 255, .7);
      height: 100vh;
      width: 100vw;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10;
    }
  `]
})
export class RESTComponent {
  constructor(
    private rest: RESTStore,
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
