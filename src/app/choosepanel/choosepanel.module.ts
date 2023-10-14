import { NgModule } from '@angular/core';
import { GameTypeService } from '../model/gametype.service';
import { SharedService } from '../services/shared.service';
import { ChoosepanelComponent } from './choosepanel.component';

@NgModule({
  imports: [],
  declarations: [ChoosepanelComponent],
  providers: [GameTypeService, SharedService],
  exports: [ChoosepanelComponent]
})
export class ChoosepanelModule { }
