import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  let pipe: ReversePipe;

  beforeEach(() => {
    pipe = new ReversePipe();
  });

  it('nice', () => {
    expect(pipe.transform([1, 2, 3])).toEqual([3, 2, 1]);
  });
});
