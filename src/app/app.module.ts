import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { GamePanelComponent } from './gamepanel/gamepanel.component';
import { GamePanelModule } from './gamepanel/gamepanel.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GamePanelModule,
    RouterModule.forRoot([
      {path:"tictactoe", component:GamePanelComponent},
      {path:"**", redirectTo:"/tictactoe"}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
