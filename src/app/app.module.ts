import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SessionsComponent } from './components/sessions/sessions.component';
import { HomeComponent } from './components/home/home.component';
import { OrderByDatePipe } from './pipes/order-by-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavComponent,
    SessionsComponent,
    OrderByDatePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
