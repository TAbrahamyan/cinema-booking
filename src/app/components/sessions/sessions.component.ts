import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CinemaService } from '../../services/cinemaService.service';
import { ISessions, IMovies, IHalls, ICinemas } from '../../interfaces';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: [ './sessions.component.scss' ]
})

export class SessionsComponent implements OnInit {
  selectedCinema: ICinemas;
  selectedHall: IHalls;
  selectedMovie: IMovies;
  selectedSession: ISessions;
  selectedBookingIndex: number | null = null;

  constructor(
    private route: ActivatedRoute,
    public cinemaService: CinemaService,
  ) { }

  ngOnInit(): void {
    if (this.cinemaService.cinemas.length > 0) {
      this.route.paramMap.subscribe(params => {
        this.selectedCinema = this.cinemaService.cinemas.find((cinema: ICinemas) => cinema.id === +params.get('cinemaId'));
        this.selectedHall = this.selectedCinema.halls.find((hall: IHalls) => hall.id === +params.get('hallId'));
        this.selectedMovie = this.selectedHall.movies.find((movie: IMovies) => movie.id === +params.get('movieId'));
        this.selectedSession = this.selectedMovie.sessions
          .map((session: ISessions) => session)
          .sort((a: ISessions, b: ISessions) => new Date(a.date).getTime() - new Date(b.date).getTime())[0];
      });
    }
  }

  bookingHandler(): void {
    if (this.selectedSession.bookingList.includes(this.selectedBookingIndex)) {
      this.selectedSession.bookingList = this.selectedSession.bookingList.filter((booked: number) => booked !== this.selectedBookingIndex);
    } else {
      this.selectedSession.bookingList.push(this.selectedBookingIndex);
    }
  }

  toArray = (n: number): number[] => Array(n).fill(null);

  get fiveMinutesLeftHandler(): boolean {
    if (this.selectedSession) {
      const fiveMinute: number = 5 * 60 * 1000;
      const datesDiff: number = Math.max(new Date(this.selectedSession.date).getTime() - new Date().getTime(), 0);

      return datesDiff > fiveMinute;
    }
  }
}
