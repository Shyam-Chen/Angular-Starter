import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { List } from './list.model';

@Injectable()
export class ListService {
  readonly API_LIST = 'https://web-go-demo.herokuapp.com/__/list';

  constructor(private http: HttpClient) { }

  public getList(): Observable<List[]> {
    return this.http.get<List[]>(this.API_LIST);
  }

  public searchText(text: string) {
    return this.http.get<List[]>(`${this.API_LIST}?text=${text}`);
  }

  public getItem(id: string): Observable<List> {
    return this.http.get<List>(`${this.API_LIST}/${id}`);
  }

  public postItem(data: any): Observable<List> {
    return this.http.post<List>(this.API_LIST, data);
  }

  public putItem(id: string, data: any): Observable<List> {
    return this.http.put<List>(`${this.API_LIST}/${id}`, data);
  }

  public deleteItem(id: string): Observable<List> {
    return this.http.delete<List>(`${this.API_LIST}/${id}`);
  }
}
