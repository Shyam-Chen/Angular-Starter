import { Component, OnInit, Inject } from '@angular/core';

import { MdDialog, MD_DIALOG_DATA } from '@angular/material';

import { List } from '../models/list.model';
import { ListService } from '../services/list.service';

import { BroadcastService } from '../services/broadcast.service';

@Component({
  selector: 'app-list-edit-dialog',
  template: `
    <md-input-container>
      <input id="input" mdInput placeholder="Text" [(ngModel)]="text">
    </md-input-container>

    <button md-button [md-dialog-close]="true" (click)="save()">Save</button>
    <button md-button [md-dialog-close]="true">Cancel</button>
  `
})
export class AppListEditDialogComponent implements OnInit {
  public text: string;

  constructor(
    private listService: ListService,
    @Inject(MD_DIALOG_DATA) public list: List,
    private broadcaster: BroadcastService
  ) { }

  public save(): void {
    if (this.text) {
      this.listService
        .putItem(this.list._id, { text: this.text })
        .subscribe(res => {
          this.broadcaster.broadcast('updateList', res);
        });
    }
  }

  ngOnInit() {
    this.text = this.list.text;
  }
}
