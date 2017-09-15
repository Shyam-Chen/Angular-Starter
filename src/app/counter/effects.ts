import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { Counter } from './model';
import { INITIAL, INCREMENT, DECREMENT, INCREMENT_ASYNC, INCREMENT_IF_ODD } from './constants';
import { onIncrement } from './actions';

@Injectable()
export class CounterEffects {
  @Effect() incrementAsync$: Observable<Action> = this.actions$
    .ofType(INCREMENT_ASYNC)
    .map(onIncrement);

  @Effect() incrementIfOdd$: Observable<Action> = this.actions$
    .ofType(INCREMENT_IF_ODD)
    .withLatestFrom(this.state$)
    .filter(([action, state]) => state.value % 2 === 1)
    .map(onIncrement);

  constructor(private actions$: Actions, private state$: Store<Counter>) { }
}
