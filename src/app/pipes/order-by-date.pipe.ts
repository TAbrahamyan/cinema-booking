import { Pipe, PipeTransform } from '@angular/core';

import { ISessions } from '../interfaces';

@Pipe({ name: 'orderByDate' })

export class OrderByDatePipe  implements PipeTransform {
  transform(array: ISessions): ISessions[] {
    if (!Array.isArray(array)) {
      return;
    }

    array.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    return array;
  }
}
