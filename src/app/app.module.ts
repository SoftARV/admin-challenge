import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { WizardModule } from "./wizard/wizard.module";
import { AppComponent } from "./app.component";
import { DomService } from "./shared/dom.service";
import { ModalService } from "./shared/modal.service";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, WizardModule],
  providers: [DomService, ModalService],
  bootstrap: [AppComponent]
})
export class AppModule {}
