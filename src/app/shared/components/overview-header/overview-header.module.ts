import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { LogoModule } from "../logo/logo.module";
import { OverviewHeaderComponent } from "./overview-header.component";

@NgModule({
    imports: [RouterModule],
    declarations:[OverviewHeaderComponent],
    exports: [OverviewHeaderComponent],
    bootstrap: [OverviewHeaderComponent]
})

export class OverviewHeaderModule{}