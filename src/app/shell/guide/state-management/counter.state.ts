import { State, Action } from '@ngxs/store';

import { CounterModel } from './counter.model';
import { Increment } from './counter.action';

@State<CounterModel>({
  name: 'counter',
  defaults: {
    value: 0,
  },
})
export class CounterState {
  @Action(Increment)
  increment({ getState, setState }) {
    const state = getState();

    setState({
      ...state,
      value: state.value + 1,
    });
  }
}
