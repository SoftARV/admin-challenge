import { Component, OnInit, HostListener } from "@angular/core";
import { Router } from "@angular/router";

import { UserService } from "../shared/user/user.service";
import { RoleService } from "../shared/role/role.service";

@Component({
  selector: "app-permissions-form",
  templateUrl: "./permissions-form.component.html",
  styleUrls: ["./permissions-form.component.scss"]
})
export class PermissionsFormComponent implements OnInit {
  public userData: User;
  public roles: Role[];

  constructor(
    private user: UserService,
    private role: RoleService,
    private router: Router
  ) {}

  ngOnInit() {
    this.initData();
  }

  @HostListener("window:beforeunload", ["$event"])
  reloadHandler(event: Event) {
    this.user.saveUserLocal();
  }

  async initData() {
    this.userData = this.user.getUser();
    this.roles = await this.role.getRoles();
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
