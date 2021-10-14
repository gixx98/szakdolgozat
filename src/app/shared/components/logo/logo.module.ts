import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { IonButton, IonHeader } from "@ionic/angular";
import { LogoComponent } from "./logo.component";

@NgModule({
    imports: [RouterModule],
    declarations:[LogoComponent],
    exports: [LogoComponent],
    bootstrap: [LogoComponent]
})

export class LogoModule{}