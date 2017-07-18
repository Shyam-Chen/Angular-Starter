import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { List } from '../models/list.model';

@Injectable()
export class ListService {
  private url = 'https://web-go-demo.herokuapp.com/__/list';

  constructor(private http: HttpClient) { }

  public getList(): Observable<List[]> {
    return this.http
      .get<List[]>(this.url);
  }

  public getItem(id: string): Observable<List> {
    return this.http
      .get<List>(`${this.url}/${id}`);
  }

  public postItem(data): Observable<List> {
    return this.http
      .post<List>(this.url, data);
  }

  public putItem(id: string, data): Observable<List> {
    return this.http
      .put<List>(`${this.url}/${id}`, data);
  }

  public deleteItem(id: string): Observable<List> {
    return this.http
      .delete<List>(`${this.url}/${id}`);
  }
}
