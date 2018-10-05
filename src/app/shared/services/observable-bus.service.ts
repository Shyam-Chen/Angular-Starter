// WIP

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

/**
 * @example
 * // <NAME>.module.ts
 * import { NgModule } from '@angular/core';
 *
 * import { ObservableBusService } from '~/shared/services/observable-bus.service';
 *
 * @NgModule({
 *   // ...
 *   providers: [ObservableBusService],
 *   // ...
 * })
 * export class <NAME>Module {}
 *
 * // <NAME_ONE>.component.ts
 * // <NAME_TWO>.component.ts
 */

@Injectable()
export class ObservableBusService {
  public bus: Subject<any> = new Subject();

  public $emit(key: any, data?: any): void {
    this.bus.next({ key, data });
  }

  public $on(key: any): Observable<any> {
    return this.bus.asObservable()
      .pipe(
        filter(event => event.key === key),
        map(event => event.data),
      );
  }

  public $off(): void {
    this.bus.unsubscribe();
  }
}
