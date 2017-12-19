import { Injectable } from '@angular/core';
import { observable, action, computed } from 'mobx';

import { Element } from './static.model';

@Injectable()
export class StaticStore {
  @observable dataset: Element[] = [];
  @observable addData: Element = { primary: '', accent: '' };
  @observable searchData: Element = { primary: '', accent: '' };
  @observable editData: Element = { id: 0, primary: '', accent: '' };
  @observable deleteData: Element = { id: 0 };
}
