import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenDay',
})
export class ShortenDayPipe implements PipeTransform {
  transform(value: string) {
    return value.substr(0, 3).toUpperCase();
  }
}
