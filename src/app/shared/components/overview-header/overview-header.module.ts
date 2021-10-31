import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { LogoModule } from "../logo/logo.module";
import { OverviewHeaderComponent } from "./overview-header.component";

@NgModule({
    imports: [RouterModule, IonicModule, LogoModule],
    declarations:[OverviewHeaderComponent],
    exports: [OverviewHeaderComponent]
})

export class OverviewHeaderModule{}