import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { USER_ROLES_URL } from "../constants";

@Injectable({
  providedIn: "root"
})
export class RoleService {
  constructor(private http: HttpClient) {}

  public async getRoles(): Promise<Role[]> {
    let roles = await this.http.get<Role[]>(USER_ROLES_URL).toPromise<Role[]>();
    return roles;
  }

  public async getRoleName(ids: number[]): Promise<Role[]> {
    let roles = await this.getRoles();
    roles = roles.filter(value => {
      let result: boolean = false;
      for (let i = 0; i < ids.length; i++) {
        if (value.id === ids[i]) {
          result = true;
        }
      }
      return result;
    });
    return roles;
  }
}
