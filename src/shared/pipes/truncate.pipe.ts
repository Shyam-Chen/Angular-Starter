import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'truncate' })
export class TruncatePipe implements PipeTransform {
  transform(value: string, length: number = 15): string {
    if (!value) return '';
    if (value.length <= length) return value;
    return `${value.substring(0, length)}...`;
  }
}
