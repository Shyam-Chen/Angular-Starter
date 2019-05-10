import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mark',
})
export class MarkPipe implements PipeTransform {
  transform(value: string, args: string): string {
    if (!args) return value;

    const regex = new RegExp(this.escapeRegExp(args), 'gi');
    return value.replace(regex, match => `<mark>${match}</mark>`);
  }

  private escapeRegExp(str: string) {
    return str.replace('/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g', '\\$&');
  }
}
