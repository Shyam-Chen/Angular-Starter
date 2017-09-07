import { Component, Inject } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';

import { BroadcasterService } from '../shared/broadcaster/broadcaster.service';

import { List } from './list.model';
import { ListService } from './list.service';

@Component({
  selector: 'app-rest-delete-dialog',
  template: `
    <p>Are you sure you want to delete it?</p>

    <button md-button [md-dialog-close]="true" (click)="confirm()">Confirm</button>
    <button md-button [md-dialog-close]="true">Cancel</button>
  `
})
export class AppRESTDeleteDialogComponent {
  constructor(
    private listService: ListService,
    private broadcaster: BroadcasterService,
    @Inject(MD_DIALOG_DATA) public item: List
  ) { }

  public confirm(): void {
    this.listService
      .deleteItem(this.item._id)
      .subscribe(res => this.broadcaster.broadcast('deleteList', res));
  }
}
