import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abbreviated',
})
export class AbbreviatedPipe implements PipeTransform {
  transform(value: string): string {
    if (value.length <= 100) {
      return value;
    }
    return value.slice(0, 100) + '...';
  }
}
