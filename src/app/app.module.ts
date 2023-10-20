import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoginPanelComponent } from './loginpanel/loginpanel.component';
import { LoginPanelModule } from './loginpanel/loginpanel.module';
import { GamePanelComponent } from './gamepanel/gamepanel.component';
import { GamePanelModule } from './gamepanel/gamepanel.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), 
    BrowserModule,
    GamePanelModule,
    LoginPanelModule,
    RouterModule.forRoot([
      {path:"tictactoe", component:GamePanelComponent},
      {path:"login", component:LoginPanelComponent},
      {path:"**", redirectTo:"/login"}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
