import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoginPanelComponent } from './loginpanel/loginpanel.component';
import { LoginPanelModule } from './loginpanel/loginpanel.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginPanelModule,
    RouterModule.forRoot([
      {path:"tictactoe", component:LoginPanelComponent},
      {path:"**", redirectTo:"/tictactoe"}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
