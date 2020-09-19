import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: [ './sidenav.component.scss' ]
})

export class SidenavComponent {
  cinemas: any;

  constructor(private http: HttpClient) {
    this.http.get('../../../assets/db.json').subscribe((data: any): void => {
      this.cinemas = data;
    });
  }

  openCinemaHallsHandler(cinemaIndex: number): void {
    const selectedCinema = this.cinemas?.find((_: any, index: number): boolean => index === cinemaIndex);
    selectedCinema.isShowHalls = !selectedCinema?.isShowHalls;
  }

  openHallMoviesHandler(cinemaIndex: number, hallIndex: number): void {
    const selectedCinema = this.cinemas?.find((_: any, index: number): boolean => index === cinemaIndex);

    if (selectedCinema) {
      const selectedHall = selectedCinema.halls?.find((_: any, index: number): boolean => index === hallIndex);
      selectedHall.isShowMovies = !selectedHall?.isShowMovies;
    }
  }
}
