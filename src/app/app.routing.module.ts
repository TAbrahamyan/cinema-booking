import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SessionsComponent } from './components/sessions/sessions.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cinema/:cinemaId/hall/:hallId/movie/:movieId', component: SessionsComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})

export class AppRoutingModule { }
