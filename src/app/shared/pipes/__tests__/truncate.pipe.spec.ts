
import { TruncatePipe } from '../truncate.pipe';

describe('TruncatePipe', () => {
  let pipe: TruncatePipe;

  beforeEach(() => {
    pipe = new TruncatePipe();
  });

  it('should handle', () => {
    expect(pipe.transform('foo')).toMatch('foo');
    expect(pipe.transform('text text text text')).toMatch('text text text ...');
    expect(pipe.transform('text text text text', 10)).toMatch('text text ...');
    expect(pipe.transform('')).toMatch('');
  });
});
