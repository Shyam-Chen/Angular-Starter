import { Component, Inject } from '@angular/core';
import { MdDialog } from '@angular/material';

import { RESTStore } from './rest.store';
import { AppRESTEditDialogComponent } from './dialog-edit.component';
import { AppRESTDeleteDialogComponent } from './dialog-delete.component';

@Component({
  selector: 'app-rest',
  template: `
    <div *mobxAutorun>
      <div>
        <md-input-container>
          <input mdInput placeholder="Text" [(ngModel)]="rest.searchData.text">
        </md-input-container>

        <button md-raised-button (click)="rest.searchItem(rest.searchData.text)">Search</button>
      </div>

      <div>
        <md-input-container>
          <input mdInput placeholder="Text" [(ngModel)]="rest.addData.text">
        </md-input-container>

        <button md-raised-button (click)="rest.addItem(rest.addData.text)">Add</button>
      </div>

      <md-card id="list">
        <md-list>
          <md-list-item *ngFor="let item of rest.dataset | reverse">
            <span>{{ item.text }}　</span>
            <button md-button color="accent" (click)="openDeleteDialog(item._id)">Delete</button>
            <button md-button color="primary" (click)="openEditDialog(item._id, item.text)">Edit</button>
          </md-list-item>
        </md-list>
      </md-card>
    </div>
  `,
  styles: [`
    #list {
      width: 25rem;
    }
  `]
})
export class RESTComponent {
  constructor(
    private rest: RESTStore,
    public editDialog: MdDialog,
    public deleteDialog: MdDialog
  ) {}

  public openEditDialog(_id: string, text: string): void {
    this.editDialog.open(AppRESTEditDialogComponent);
    this.rest.editData._id = _id;
    this.rest.editData.text = text;
  }

  public openDeleteDialog(_id: string): void {
    this.deleteDialog.open(AppRESTDeleteDialogComponent);
    this.rest.deleteData._id = _id;
  }
}
