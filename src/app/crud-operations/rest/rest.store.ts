import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, action, computed } from 'mobx';

import { List } from './rest.model';

@Injectable()
export class RESTStore {
  readonly API_LIST = 'https://web-go-demo.herokuapp.com/__/text-list';

  constructor(private http: HttpClient) {}

  @observable dataset: List[] = [];
  @observable addData: List = { text: '' };
  @observable searchData: List = { text: '' };
  @observable editData: List = { _id: '', text: '' };
  @observable deleteData: List = { _id: '' };
  @observable loading: boolean = false;

  @action
  searchItem(text?: string): void {
    this.loading = true;
    this.http
      .get<List[]>(text ? `${this.API_LIST}?text=${text}` : this.API_LIST)
      .subscribe((res: any) => {
        this.dataset = res.data;
        this.searchData.text = '';
        this.loading = false;
      });
  }

  @action
  addItem(text: string): void {
    if (text) {
      this.loading = true;
      this.http
        .post<List>(this.API_LIST, { text })
        .subscribe(() => {
          this.searchItem();
          this.addData.text = '';
          this.loading = false;
        });
    }
  }

  @action
  editItem(id: string, text: string): void {
    this.loading = true;
    this.http
      .put<List>(`${this.API_LIST}/${id}`, { text })
      .subscribe(() => {
        this.searchItem();
        this.loading = false;
      });
  }

  @action
  deleteItem(id: string): void {
    this.loading = true;
    this.http
      .delete<List>(`${this.API_LIST}/${id}`)
      .subscribe(() => {
        this.searchItem();
        this.loading = false;
      });
  }

  @computed
  get progress(): string {
    return this.loading ? '' : 'none';
  }
}
