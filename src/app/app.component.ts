import { Component, OnInit, Inject } from '@angular/core';

import { MdDialog } from '@angular/material';

import { List } from './models/list.model';
import { ListService } from './services/list.service';

import { BroadcastService } from './services/broadcast.service';

import { AppListEditDialogComponent } from './components/app-list-edit-dialog.component';

@Component({
  selector: 'app-root',
  template: `
    <h3>MEAN Stack RESTful API</h3>

    <md-input-container>
      <input id="text" #newList mdInput placeholder="Text" [(ngModel)]="text" (keyup.enter)="create(newList.value)">
    </md-input-container>

    <button id="add" md-button md-raised-button (click)="create(newList.value)">Add</button>

    <span>{{ response }}</span>

    <md-card class="list">
      <md-progress-bar mode="indeterminate" [style.display]="display"></md-progress-bar>
      <md-list>
        <md-list-item *ngFor="let item of list | reverse">
          <span>{{ item.text }}　</span>
          <button md-button (click)="openEditDialog(item)">Edit</button>
          <button md-button (click)="delete(item._id)">Delete</button>
        </md-list-item>
      </md-list>
    </md-card>
  `,
  styles: [`
    .list {
      width: 25rem;
    }
  `]
})
export class AppComponent implements OnInit {
  public list: List[];
  public response: string;
  public text: string;
  public display: string;

  constructor(
    private listService: ListService,
    public dialog: MdDialog,
    private broadcaster: BroadcastService
  ) {
    this.broadcaster.on<string>('updateList')
      .subscribe(res => {
        this.updateList();
        this.response = JSON.stringify(res);
      });
  }

  public create(newItem: string): void {
    if (newItem) {
      this.listService
        .postItem({ text: newItem })
        .subscribe(data => {
          this.response = JSON.stringify(data);
          this.updateList();
          this.text = '';
        });
    }
  }

  public read(): void {
    this.listService
      .getList()
      .subscribe(data => {
        this.list = data;
        this.display = 'none';
      });
  }

  public delete(id: string): void {
    this.listService
      .deleteItem(id)
      .subscribe(data => {
        this.response = JSON.stringify(data);
        this.updateList();
      });
  }

  public updateList(): void {
    this.listService
      .getList()
      .subscribe(data => {
        this.list = data;
      });
  }

  public openEditDialog(item): void {
    this.dialog
      .open(AppListEditDialogComponent, {
        data: item
      });
  }

  ngOnInit() {
    this.read();
  }
}
