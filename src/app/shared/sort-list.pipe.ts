import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortList',
})
export class SortListPipe implements PipeTransform {
  transform(list: any[], sort: string): any[] {
    const typedList = type => list.sort((a, b) => a[type] - b[type]).reverse();

    if (sort === 'published') return typedList('publish');
    if (sort === 'views') return typedList('views');
    if (sort === 'collections') return typedList('collectCount');

    return list;
  }
}
