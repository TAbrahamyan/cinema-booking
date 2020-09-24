import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

import { ICinemas, IHalls } from '../../interfaces';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: [ './sidenav.component.scss' ]
})

export class SidenavComponent implements OnInit {
  cinemas: ICinemas[] = [];
  toggledSidenav: boolean = true;
  selectedMovieId: number | null = null;

  constructor(
    private router: Router,
    private http: HttpClient,
    private breakpointObserver: BreakpointObserver,
  ) { }

  ngOnInit(): void {
    this.http.get('./assets/db.json').subscribe((data: ICinemas[]) => this.cinemas = data);

    this.breakpointObserver
      .observe(['(min-width: 957px)'])
      .subscribe((state: BreakpointState): void => {
        if (state.matches) {
          this.toggledSidenav = true;
        } else {
          this.toggledSidenav = false;
        }
      });
  }

  toggleCinemas(cinema: ICinemas): void {
    cinema.collapsed = !cinema.collapsed;
    cinema.halls.forEach((hall: IHalls) => hall.collapsed = false);
  }

  navigateToMovie(cinemaId: number, hallId: number, movieId: number): void {
    this.selectedMovieId = movieId;
    this.router.navigate([ `/cinema/${cinemaId}/hall/${hallId}/movie/${movieId}` ]);
  }
}
