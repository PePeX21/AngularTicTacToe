import { Injectable, NgModule } from '@angular/core';
import { gameType } from './gametype.enum';
@Injectable({providedIn: 'root'})
export class GameTypeService {
    gameType = gameType;
}