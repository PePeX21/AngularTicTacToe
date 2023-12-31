import { Component } from '@angular/core';
import { gameType } from '../model/gametype.enum';
import { GameTypeService } from '../model/gametype.service'; 
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-choosepanel',
  templateUrl: './choosepanel.component.html',
  styleUrls: ['./choosepanel.component.css']
})
export class ChoosepanelComponent {
  
  constructor(public type: GameTypeService, private sharedService: SharedService) {}

  startNew(gametype: gameType): void{
    this.sharedService.sendGameTypeEvent(gametype);
  }
}
