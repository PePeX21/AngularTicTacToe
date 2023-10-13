import { Injectable, NgModule } from '@angular/core';
import { gameType } from './gametype.enum';
@Injectable()
export class TypeService {
    gameType = gameType;
}