import { Component, OnInit, Inject } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';

import { BroadcasterService } from '../shared/broadcaster/broadcaster.service';

import { List } from './list.model';
import { ListService } from './list.service';

@Component({
  selector: 'app-rest-edit-dialog',
  template: `
    <md-input-container>
      <input id="input" mdInput placeholder="Text" [(ngModel)]="text">
    </md-input-container>

    <button md-button [md-dialog-close]="true" (click)="save()">Save</button>
    <button md-button [md-dialog-close]="true">Cancel</button>
  `
})
export class AppRESTEditDialogComponent implements OnInit {
  public text: string;

  constructor(
    private listService: ListService,
    @Inject(MD_DIALOG_DATA) public item: List,
    private broadcaster: BroadcasterService
  ) { }

  public save(): void {
    if (this.text) {
      this.listService
        .putItem(this.item._id, { text: this.text })
        .subscribe(res => this.broadcaster.broadcast('updateList', res));
    }
  }

  ngOnInit() {
    this.text = this.item.text;
  }
}
