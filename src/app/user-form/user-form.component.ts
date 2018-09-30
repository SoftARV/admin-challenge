import { Component, OnInit, HostListener } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";
import { Router } from "@angular/router";

import { UserService } from "../shared/user/user.service";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.scss"]
})
export class UserFormComponent implements OnInit {
  public userForm: FormGroup;

  constructor(
    private user: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.initForm();
  }

  ngOnInit() {}

  @HostListener("window:beforeunload", ["$event"])
  reloadHandler(event: Event) {
    this.user.saveUserLocal();
  }

  public initForm() {
    let user: User = this.user.getUser();
    this.userForm = new FormGroup({
      firstName: new FormControl(user.firstName, Validators.required),
      lastName: new FormControl(user.lastName, Validators.required),
      email: new FormControl(user.email, [
        Validators.required,
        Validators.email
      ])
    });
  }

  get firstName() {
    return this.userForm.get("firstName");
  }
  get lastName() {
    return this.userForm.get("lastName");
  }
  get email() {
    return this.userForm.get("email");
  }

  nextStep() {
    if (this.userForm.valid) {
      this.user.setUserName(this.userForm.get("firstName").value);
      this.user.setUserLastName(this.userForm.get("lastName").value);
      this.user.setUserEmail(this.userForm.get("email").value);

      this.router.navigate(["permission"]);
    }
  }
}
