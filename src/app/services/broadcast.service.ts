import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { BroadcastEvent } from '../models/broadcast.model';

export class BroadcastService {
  private eventBusinessLogic: Subject<BroadcastEvent>;

  constructor() {
    this.eventBusinessLogic = new Subject<BroadcastEvent>();
  }

  public broadcast(key: any, data?: any): void {
    this.eventBusinessLogic
      .next({ key, data });
  }

  public on<T>(key: any): Observable<T> {
    return this.eventBusinessLogic
      .asObservable()
      .filter(event => event.key === key)
      .map(event => <T>event.data);
  }
}
