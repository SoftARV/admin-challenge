import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
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
  ) {}

  ngOnInit() {
    this.initForm();
  }

  public initForm() {
    let user: User = this.user.getUser();
    this.userForm = this.formBuilder.group({
      name: [user.name, [Validators.required]],
      lastname: [user.lastname, [Validators.required]],
      email: [user.email, [Validators.required, Validators.email]]
    });
  }

  nextStep() {
    if (this.userForm.valid) {
      let user: User = {
        name: this.userForm.get("name").value,
        lastname: this.userForm.get("lastname").value,
        email: this.userForm.get("email").value
      };

      this.user.setUser(user);
      // this.router.navigate([""]);
    }
  }
}
