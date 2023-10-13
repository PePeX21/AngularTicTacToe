import { NgModule } from '@angular/core';
import { TypeService } from '../model/gametype.module';
import { SharedService } from '../services/shared.service';
import { ChoosepanelComponent } from './choosepanel.component';
import { SharedModule } from '../services/shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [ChoosepanelComponent],
  providers: [TypeService, SharedService],
  exports: [ChoosepanelComponent]
})
export class ChoosepanelModule { }
