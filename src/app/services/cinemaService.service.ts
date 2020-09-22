import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ICinemas } from '../interfaces';

@Injectable({ providedIn: 'root' })

export class CinemaService {
  cinemas: ICinemas[] = [];

  constructor(private http: HttpClient) { }

  getCinemas(): Observable<object> {
    return this.http.get('../../../assets/db.json');
  }

  setCinemas(cinemas: ICinemas[]): void {
    this.cinemas = cinemas;
  }
}
