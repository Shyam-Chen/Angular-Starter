import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterList',
  pure: false,
})
export class FilterListPipe implements PipeTransform {
  transform(list: any[], length: string): any[] {
    return list.filter((item) => {
      if (length === 'lessThanFive') return item.duration < 300;
      if (length === 'fiveToTen') return item.duration >= 300 && item.duration <= 600;
      if (length === 'moreThanTen') return item.duration > 600;
      return list;
    });
  }
}
