import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

import { CinemaService } from '../../services/cinemaService.service';
import { ICinemas, IHalls } from 'src/app/interfaces';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: [ './sidenav.component.scss' ]
})

export class SidenavComponent implements OnInit {
  toggledSidenav: boolean = true;
  selectedMovieId: number | null = null;

  constructor(
    private router: Router,
    public cinemaService: CinemaService,
    private breakpointObserver: BreakpointObserver,
  ) { }

  ngOnInit(): void {
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
    cinema.isShowMenu = !cinema.isShowMenu;
    cinema.halls.forEach((hall: IHalls) => hall.isShowMenu = false);
  }

  navigateToMovie(cinemaId: number, hallId: number, movieId: number): void {
    this.selectedMovieId = movieId;
    this.router.navigate([ `/cinema/${cinemaId}/hall/${hallId}/movie/${movieId}` ]);
  }
}
