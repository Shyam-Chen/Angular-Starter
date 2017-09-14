import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { Broadcaster } from './broadcaster.model';

export class BroadcasterService {
  private broadcaster: Subject<Broadcaster>;

  constructor() {
    this.broadcaster = new Subject<Broadcaster>();
  }

  public broadcast(key: any, data?: any): void {
    this.broadcaster
      .next({ key, data });
  }

  public on<T>(key: any): Observable<T> {
    return this.broadcaster
      .asObservable()
      .filter(event => event.key === key)
      .map(event => <T>event.data);
  }
}
