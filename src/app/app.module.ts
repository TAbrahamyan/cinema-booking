import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SessionsComponent } from './components/sessions/sessions.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    SessionsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
