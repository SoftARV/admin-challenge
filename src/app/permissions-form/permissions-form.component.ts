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
  public roles: Roles;

  constructor(private user: UserService, private router: Router) {}

  ngOnInit() {
    this.initData();
  }

  async initData() {
    this.userData = this.user.getUser();
    this.roles = await this.user.getRoles();
  }

  goBack() {
    this.router.navigate(["new-user"]);
  }

  nextStep() {
    if (this.userData.permissions.length !== 0) {
      this.user.setUserPermissions(this.userData.permissions);
      this.router.navigate(["confirm"]);
    }
  }
}
