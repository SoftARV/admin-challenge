import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { USER_ROLES_URL } from "../constants";

@Injectable({
  providedIn: "root"
})
export class RoleService {
  private roles: Role[];

  constructor(private http: HttpClient) {}

  public async getRoles(): Promise<Role[]> {
    let roles = await this.http.get<Role[]>(USER_ROLES_URL).toPromise<Role[]>();
    this.roles = roles;
    return roles;
  }

  public getRoleName(id: number) {
    console.log(
      this.roles.find(role => {
        return role.id === id;
      }).name
    );
  }
}
