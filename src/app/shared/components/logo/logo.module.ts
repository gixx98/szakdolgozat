import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { IonButton, IonHeader, IonicModule } from "@ionic/angular";
import { LogoComponent } from "./logo.component";

@NgModule({
    imports: [RouterModule,  IonicModule],
    declarations:[LogoComponent],
    exports: [LogoComponent]
})

export class LogoModule{}