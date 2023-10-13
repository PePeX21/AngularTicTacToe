import { NgModule } from "@angular/core";
import { SharedService } from "./shared.service";

@NgModule({
    exports: [SharedService]
})
export class SharedModule{};