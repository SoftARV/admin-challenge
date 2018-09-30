import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { WizardComponent } from "./wizard/wizard.component";
import { ModalService } from "./shared/modal.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(private router: Router, private modal: ModalService) {}

  openModal() {
    let inputs = {
      isMobile: false
    };
    this.router.navigate(["wizard/new-user"]);
    this.modal.init(WizardComponent, inputs, {});
  }

  removeModal() {
    this.router.navigate([""]);
    this.modal.destroy();
  }
}
