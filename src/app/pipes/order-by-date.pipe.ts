import { Pipe, PipeTransform } from '@angular/core';

import { ISessions } from '../interfaces';

@Pipe({ name: 'orderByDate' })

export class OrderByDatePipe  implements PipeTransform {
  transform(sessions: ISessions): ISessions[] {
    if (!Array.isArray(sessions)) {
      return;
    }

    sessions.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    return sessions;
  }
}
