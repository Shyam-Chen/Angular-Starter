import { Injectable } from '@angular/core';
import { observable, action, computed } from 'mobx';

import { List } from './static.model';

@Injectable()
export class StaticStore {
  protected initial: List[] = [
    { id: 4, primary: 'Vanilla', accent: 'Cordova' },
    { id: 3, primary: 'Angular', accent: 'Ionic' },
    { id: 2, primary: 'React', accent: 'React Native' },
    { id: 1, primary: 'Vue', accent: 'Weex' }
  ];

  @observable dataset: List[] = [...this.initial];

  @observable addData: List = { primary: '', accent: '' };
  @observable searchData: List = { primary: '', accent: '' };
  @observable editData: List = { id: 0, primary: '', accent: '' };
  @observable deleteData: List = { id: 0 };

  @action
  addItem(primary, accent) {
    if (!!primary && !!accent) {
      const id = this.dataset.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1;
      this.dataset = [{ id, primary, accent }, ...this.dataset.map(item => item)];
      this.addData = { primary: '', accent: '' };
    }
  }

  @action
  searchItem(primary, accent) {
    this.dataset = this.initial.filter(item =>
      (item.primary.toLowerCase().indexOf(primary.toLowerCase()) !== -1) &&
      (item.accent.toLowerCase().indexOf(accent.toLowerCase()) !== -1)
    );
    this.searchData = { primary: '', accent: '' };
  }

  @action
  deleteItem(id: number): void {
    this.dataset = [...this.dataset.filter(item => item.id !== Number(id))];
  }

  @action
  editItem({ id, primary, accent }: List): void {
    this.dataset = [
      ...this.dataset.map(item =>
        item.id === id ? { ...item, primary, accent } : item
      )
    ];
  }
}
