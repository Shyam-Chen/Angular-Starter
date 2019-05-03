import { State, StateContext, Action, Selector } from '@ngxs/store';

import { CounterModel } from './counter.model';
import { Increment } from './counter.action';

@State<CounterModel>({
  name: 'counter',
  defaults: {
    value: 0,
  },
})
export class CounterState {
  @Selector()
  static evenOrOdd(state: CounterModel): string {
    return state.value % 2 === 0 ? 'even' : 'odd';
  }

  @Action(Increment)
  public increment({ getState, setState }: StateContext<CounterModel>): void {
    const state = getState();
    setState({ ...state, value: state.value + 1 });
  }
}
