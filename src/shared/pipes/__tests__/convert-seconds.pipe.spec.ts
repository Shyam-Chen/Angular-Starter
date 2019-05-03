import { ConvertSecondsPipe } from '../convert-seconds.pipe';

describe('ConvertSecondsPipe', () => {
  let pipe: ConvertSecondsPipe;

  beforeEach(() => {
    pipe = new ConvertSecondsPipe();
  });

  it('should be handled', () => {
    expect(pipe.transform(44230)).toMatch('12:17:10');
    expect(pipe.transform(4230)).toMatch('01:10:30');
    expect(pipe.transform(777)).toMatch('12:57');
    expect(pipe.transform(390)).toMatch('06:30');
    expect(pipe.transform(12)).toMatch('00:12');
    expect(pipe.transform(3)).toMatch('00:03');
  });
});
