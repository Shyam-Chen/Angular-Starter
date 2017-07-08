import 'rxjs/add/operator/map';

import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { List } from '../models/list.model';

@Injectable()
export class ListService {
  private url = 'https://web-go-demo.herokuapp.com/__/list';

  constructor(private http: Http) { }

  public getList(): Observable<List[]> {
    return this.http
      .get(this.url)
      .map(res => res.json());
  }

  public getItem(id: string): Observable<List> {
    return this.http
      .get(`${this.url}/${id}`)
      .map(res => res.json());
  }

  public postItem(data): Observable<List> {
    return this.http
      .post(this.url, data)
      .map(res => res.json());
  }

  public putItem(id: string, data): Observable<List> {
    return this.http
      .put(`${this.url}/${id}`, data)
      .map(res => res.json());
  }

  public deleteItem(id: string): Observable<List> {
    return this.http
      .delete(`${this.url}/${id}`)
      .map(res => res.json());
  }
}
