import { TimeSincePipe } from '../time-since.pipe';

describe('TimeSincePipe', () => {
  let pipe: TimeSincePipe;

  beforeEach(() => {
    pipe = new TimeSincePipe();
  });

  it('should be handled', () => {
    expect(pipe.transform(Date.now())).toMatch('a few seconds ago');
    expect(pipe.transform(Date.now() - 60 * 1000)).toMatch('a minute ago');
    expect(pipe.transform(Date.now() - 2 * 60 * 1000)).toMatch('2 minutes ago');
    expect(pipe.transform(Date.now() - 60 * 60 * 1000)).toMatch('an hour ago');
    expect(pipe.transform(Date.now() - 2 * 60 * 60 * 1000)).toMatch('2 hours ago');
    expect(pipe.transform(Date.now() - 24 * 60 * 60 * 1000)).toMatch('a day ago');
    expect(pipe.transform(Date.now() - 2 * 24 * 60 * 60 * 1000)).toMatch('2 days ago');
    expect(pipe.transform(Date.now() - 30 * 24 * 60 * 60 * 1000)).toMatch('a month ago');
    expect(pipe.transform(Date.now() - 2 * 30 * 24 * 60 * 60 * 1000)).toMatch('2 months ago');
    expect(pipe.transform(Date.now() - 12 * 30 * 24 * 60 * 60 * 1000)).toMatch('a year ago');
    expect(pipe.transform(Date.now() - 2 * 12 * 30 * 24 * 60 * 60 * 1000)).toMatch('2 years ago');
  });
});
