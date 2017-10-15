import { Component, Inject } from '@angular/core';
import { MdDialog } from '@angular/material';

import { RESTStore } from './rest.store';
import { DialogEditComponent } from './components/dialog-edit.component';
import { DialogDeleteComponent } from './components/dialog-delete.component';

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

      <div class="progress" [ngStyle]="{ display: rest.progress }">
        <md-spinner></md-spinner>
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
    public editDialog: MdDialog,
    public deleteDialog: MdDialog
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
