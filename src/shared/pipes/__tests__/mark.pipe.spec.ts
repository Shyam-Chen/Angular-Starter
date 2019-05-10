import { MarkPipe } from '../mark.pipe';

describe('MarkPipe', () => {
  let pipe: MarkPipe;

  beforeEach(() => {
    pipe = new MarkPipe();
  });

  it('should be handled', () => {
    expect(pipe.transform('Angular Material', 'material')).toMatch('Angular <mark>Material</mark>');
  });
});
