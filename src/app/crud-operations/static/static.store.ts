import { Injectable } from '@angular/core';
import { observable, action, computed } from 'mobx';

import { Element } from './static.model';

@Injectable()
export class StaticStore {
  @observable dataset: Element[] = [
    { id: 4, primary: 'Vanilla', accent: 'Cordova' },
    { id: 3, primary: 'Angular', accent: 'Ionic' },
    { id: 2, primary: 'React', accent: 'React Native' },
    { id: 1, primary: 'Vue', accent: 'Weex' }
  ];

  @observable addData: Element = { primary: '', accent: '' };
  @observable searchData: Element = { primary: '', accent: '' };
  @observable editData: Element = { id: 0, primary: '', accent: '' };
  @observable deleteData: Element = { id: 0 };

  @action
  onAddItem(primary, accent) {
    if (!!primary && !!accent) {
      const id = this.dataset.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1;
      this.dataset = [{ id, primary, accent }, ...this.dataset.map(item => item)];
      this.addData = { primary: '', accent: '' };
    }
  }
}
