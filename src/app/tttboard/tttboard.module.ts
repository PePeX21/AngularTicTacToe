import { NgModule } from '@angular/core'
import { GameTypeService } from '../model/gametype.service';
import { SharedService } from '../services/shared.service';
import { TttboardComponent } from './tttboard.component';
import { CommonModule } from '@angular/common';
import { SquareComponent } from './square.component';
import { WebSocketService } from '../services/websocket.service';

@NgModule({
    imports: [CommonModule],
    declarations: [TttboardComponent, SquareComponent],
    providers: [GameTypeService, SharedService, WebSocketService],
    exports: [TttboardComponent]
  })
  export class TttboardModule{};