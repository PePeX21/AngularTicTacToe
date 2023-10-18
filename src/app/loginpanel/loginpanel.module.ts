import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
//import { TttboardModule } from "../tttboard/tttboard.module";
//import { ChoosepanelModule } from "../choosepanel/choosepanel.module";
//import { SharedService } from "../services/shared.service";
//import { GameTypeService } from "../model/gametype.service";
import { LoginPanelComponent } from "./loginpanel.component";

@NgModule({
    //imports: [TttboardModule, ChoosepanelModule],
    imports: [FormsModule],
    declarations: [LoginPanelComponent],
    //providers: [SharedService, GameTypeService],
    exports: [LoginPanelComponent]
})
export class LoginPanelModule{};