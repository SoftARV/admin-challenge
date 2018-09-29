import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { UserService } from "../shared/user/user.service";

@Component({
  selector: "app-permissions-form",
  templateUrl: "./permissions-form.component.html",
  styleUrls: ["./permissions-form.component.scss"]
})
export class PermissionsFormComponent implements OnInit {
  public userData: User;
  public rolesSelected: number[];
  public roles;

  constructor(private user: UserService, private router: Router) {
    this.roles = this.user.getRoles();
    console.log(this.roles);
  }

  ngOnInit() {
    this.userData = this.user.getUser();
  }

  goBack() {
    this.router.navigate(["new-user"]);
  }
}
