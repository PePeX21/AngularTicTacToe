import { NgModule } from "@angular/core";
import { TttboardModule } from "../tttboard/tttboard.module";
import { ChoosepanelModule } from "../choosepanel/choosepanel.module";
import { SharedService } from "../services/shared.service";
import { GameTypeService } from "../model/gametype.service";
import { GamePanelComponent } from "./gamepanel.component";
import { SquareModule } from "../square/square.module";

@NgModule({
    imports: [TttboardModule, ChoosepanelModule, SquareModule],
    declarations: [GamePanelComponent],
    providers: [SharedService, GameTypeService],
    exports: [GamePanelComponent]
})
export class GamePanelModule{};