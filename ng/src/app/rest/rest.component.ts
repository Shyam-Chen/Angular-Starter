import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog } from '@angular/material';

import { BroadcasterService } from '../shared/services/broadcaster/broadcaster.service';

import { List } from './list.model';
import { ListService } from './list.service';
import { AppRESTEditDialogComponent } from './dialog-edit.component';
import { AppRESTDeleteDialogComponent } from './dialog-delete.component';

@Component({
  selector: 'app-rest',
  template: `
    <div>
      <md-input-container>
        <input id="search-text" #searchText mdInput placeholder="Text" [(ngModel)]="searchModel" (keyup.enter)="search(searchText.value)">
      </md-input-container>

      <button id="search" md-button md-raised-button (click)="search(searchText.value)">Search</button>
    </div>

    <div>
      <md-input-container>
        <input id="text" #newList mdInput placeholder="Text" [(ngModel)]="createText" (keyup.enter)="create(newList.value)">
      </md-input-container>

      <button id="add" md-button md-raised-button (click)="create(newList.value)">Add</button>
    </div>

    <md-card id="list">
      <md-progress-bar mode="indeterminate" [style.display]="display"></md-progress-bar>
      <md-list>
        <md-list-item *ngFor="let item of list | reverse">
          <span>{{ item.text }}　</span>
          <button md-button (click)="openEditDialog(item)">Edit</button>
          <button md-button (click)="openDeleteDialog(item)">Delete</button>
        </md-list-item>
      </md-list>
    </md-card>
  `,
  styles: [`
    #list {
      width: 25rem;
    }
  `]
})
export class RESTComponent implements OnInit {
  public list: List[];
  public searchModel: string;
  public createText: string;
  public display: string;

  constructor(
    private listService: ListService,
    public editDialog: MdDialog,
    public deleteDialog: MdDialog,
    private broadcaster: BroadcasterService
  ) {
    this.broadcaster.on<string>('updateList')
      .subscribe(() => this.updateList());

    this.broadcaster.on<string>('deleteList')
      .subscribe(() => this.updateList());
  }

  public search(text: string) {
    this.listService
      .searchText(text)
      .subscribe(data => {
        this.list = data;
        this.display = 'none';
        this.searchModel = '';
      })
  }

  public create(newItem: string): void {
    if (newItem) {
      this.listService
        .postItem({ text: newItem })
        .subscribe(() => {
          this.updateList();
          this.createText = '';
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

  public updateList(): void {
    this.listService
      .getList()
      .subscribe(data => this.list = data);
  }

  public openEditDialog(data: any): void {
    this.editDialog.open(AppRESTEditDialogComponent, { data });
  }

  public openDeleteDialog(data: any): void {
    this.deleteDialog.open(AppRESTDeleteDialogComponent, { data });
  }

  ngOnInit() {
    this.read();
  }
}
