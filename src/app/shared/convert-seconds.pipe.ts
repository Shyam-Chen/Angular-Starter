import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertSeconds',
})
export class ConvertSecondsPipe implements PipeTransform {
  transform(value: number): string {
    const timeSubstr = (start: number = 11, end: number = 8): string => (
      new Date(value * 1000).toISOString().substr(start, end)
    );

    if (value < 3600) return timeSubstr(14, 5);
    return timeSubstr();
  }
}
