import { NgModule } from '@angular/core'
import { TypeService } from '../model/gametype.module';
import { SharedService } from '../services/shared.service';
import { TttboardComponent } from './tttboard.component';
import { SquareComponent } from '../square/square.component';

@NgModule({
    imports: [],
    declarations: [TttboardComponent, SquareComponent],
    providers: [TypeService, SharedService],
    exports: [TttboardComponent]
  })
  export class TttboardModule{};