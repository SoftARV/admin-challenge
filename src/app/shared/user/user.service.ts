import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { USER_ROLES_URL } from "../constants";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private user: User;

  constructor(private http: HttpClient) {
    this.initUser();
  }

  private initUser() {
    this.user = {
      firstName: "",
      lastName: "",
      email: "",
      permissions: []
    };
    if (localStorage.getItem("firstName") !== null) {
      this.user.firstName = localStorage.getItem("firstName");
    }
    if (localStorage.getItem("lastName") !== null) {
      this.user.lastName = localStorage.getItem("lastName");
    }
    if (localStorage.getItem("email") !== null) {
      this.user.email = localStorage.getItem("email");
    }
    if (localStorage.getItem("permissions") !== null) {
      let permissions = localStorage
        .getItem("permissions")
        .split(",")
        .map(value => {
          return parseInt(value);
        });
      this.user.permissions.push(...permissions);
    }
  }

  public getUser() {
    return this.user;
  }

  public setUser(user: User) {
    this.setUserName(user.firstName);
    this.setUserLastName(user.lastName);
    this.setUserEmail(user.email);
    this.setUserPermissions(user.permissions);
  }

  public setUserName(name: string) {
    this.user.firstName = name;
  }

  public setUserLastName(lastname: string) {
    this.user.lastName = lastname;
  }

  public setUserEmail(email: string) {
    this.user.email = email;
  }

  public setUserPermissions(permissions: number[]) {
    this.user.permissions = permissions;
  }

  public saveUserLocal() {
    localStorage.setItem("firstName", this.user.firstName);
    localStorage.setItem("lastName", this.user.lastName);
    localStorage.setItem("email", this.user.email);
    localStorage.setItem("permissions", this.user.permissions.toString());
  }

  public saveUser() {
    // HTTP request to save user
  }

  public async getRoles(): Promise<Roles> {
    // HTTP request to get user roles list
    let roles = await this.http.get<Roles>(USER_ROLES_URL).toPromise<Roles>();

    return roles;
  }
}
