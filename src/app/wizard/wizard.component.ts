import { Component } from "@angular/core";
import { trigger, style, animate, transition } from "@angular/animations";
import { ModalService } from "../shared/modal.service";

@Component({
  selector: "app-wizard",
  templateUrl: "./wizard.component.html",
  styleUrls: ["./wizard.component.scss"],
  animations: [
    trigger("dialog", [
      transition("void => *", [
        style({ transform: "scale3d(.3, .3, .3)" }),
        animate(200)
      ]),
      transition("* => void", [
        animate(200, style({ transform: "scale3d(.0, .0, .0)" }))
      ])
    ])
  ]
})
export class WizardComponent {
  constructor(private modal: ModalService) {}

  public close() {
    this.modal.destroy();
  }
}
