import { Component, OnInit, HostListener } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../shared/user/user.service";
import { RoleService } from "../shared/role/role.service";

@Component({
  selector: "app-confirmation-form",
  templateUrl: "./confirmation-form.component.html",
  styleUrls: ["./confirmation-form.component.scss"]
})
export class ConfirmationFormComponent implements OnInit {
  public userData: User;
  public roles: Role[];

  constructor(
    private user: UserService,
    private role: RoleService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userData = this.user.getUser();
    this.getRolesNames(this.userData.permissions);
  }

  async getRolesNames(ids: number[]) {
    this.roles = await this.role.getRoleName(ids);
  }

  @HostListener("window:beforeunload", ["$event"])
  reloadHandler(event: Event) {
    this.user.saveUserLocal();
  }

  goBack() {
    this.router.navigate(["permission"]);
  }
}
