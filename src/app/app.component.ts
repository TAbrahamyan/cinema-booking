import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CinemaService } from './services/cinemaService.service';
import { ICinemas } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.scss' ]
})

export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    public cinemaService: CinemaService,
  ) { }

  ngOnInit(): void {
    this.router.navigate([ '/' ]);
    this.cinemaService.getCinemas().subscribe((data: ICinemas[]) => this.cinemaService.setCinemas(data));
  }
}
