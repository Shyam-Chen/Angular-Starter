import { Action } from '@ngrx/store';

import { Counter } from './model';
import { INITIAL, INCREMENT, DECREMENT } from './constants';

export default (state: Counter = INITIAL, action: Action): Counter => {
  const { type } = action;

  switch (type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 };
    case DECREMENT:
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
};
