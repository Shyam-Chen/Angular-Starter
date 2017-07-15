export interface CounterState {
  counter: number;
}

export const INITIAL_COUNTER_STATE: CounterState = {
  counter: 0
};

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
export const INCREMENT_IF_ODD = 'INCREMENT_IF_ODD';
export const DECREMENT_IF_EVEN = 'DECREMENT_IF_EVEN';

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const reset = () => ({ type: RESET });
export const incrementIfOdd = () => ({ type: INCREMENT_IF_ODD });
export const decrementIfEven = () => ({ type: DECREMENT_IF_EVEN });

import { Action } from '@ngrx/store';

export const counterReducer = (state = INITIAL_COUNTER_STATE, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
      // return Object.assign({}, state, { counter: state.counter + payload.value });
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
      // return Object.assign({}, state, { counter: state.counter - payload.value });
    case RESET:
      return INITIAL_COUNTER_STATE;
      // return Object.assign({}, state, { counter: 0 });
    default:
      return state;
  }
};

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Injectable()
export class CounterEffects {
  @Effect() incrementIfOdd$ = this.actions$
    .ofType(INCREMENT_IF_ODD)
    .withLatestFrom(this.state$)
    .filter(([action, state]) => state.counter % 2 === 1)
    .map(increment);

  @Effect() decrementIfEven$ = this.actions$
    .ofType(DECREMENT_IF_EVEN)
    .withLatestFrom(this.state$)
    .filter(([action, state]) => state.counter % 2 === 0)
    .map(decrement);

  constructor(private actions$: Actions, private state$: Store<CounterState>) { }
}
