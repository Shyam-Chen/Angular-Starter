import { Injectable } from '@angular/core';
import { observable, action, computed } from 'mobx';

import { List } from './crud.model';

@Injectable()
export class CRUDStore {
  @observable dataset: List[] = [];
  @observable addData: List = { primary: '', accent: '' };
  @observable searchData: List = { primary: '', accent: '' };
  @observable editData: List = { id: 0, primary: '', accent: '' };
  @observable deleteData: List = { id: 0 };
}
