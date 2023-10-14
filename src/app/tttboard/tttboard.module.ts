import { NgModule } from '@angular/core'
import { GameTypeService } from '../model/gametype.service';
import { SharedService } from '../services/shared.service';
import { TttboardComponent } from './tttboard.component';
import { SquareModule } from '../square/square.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [SquareModule, CommonModule],
    declarations: [TttboardComponent],
    providers: [GameTypeService, SharedService],
    exports: [TttboardComponent]
  })
  export class TttboardModule{};