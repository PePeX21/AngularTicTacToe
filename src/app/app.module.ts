import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TttboardComponent } from './tttboard/tttboard.component';
import { SquareComponent } from './square/square.component';
import { ChoosepanelComponent } from './choosepanel/choosepanel.component';
import { TttboardModule } from './tttboard/tttboard.module';
import { ChoosepanelModule } from './choosepanel/choosepanel.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:"tictactoe", component:TttboardComponent},
      {path:"**", redirectTo:"/tictactoe"}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
