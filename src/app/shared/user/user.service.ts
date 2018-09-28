import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private user: User;

  constructor() {
    this.user = {
      name: "",
      lastname: "",
      email: ""
    };
  }

  public getUser() {
    return this.user;
  }

  public setUser(user: User) {
    this.user = user;
  }

  public setUserName(name: string) {
    this.user.name = name;
  }

  public setUserLastName(lastname: string) {
    this.user.lastname = lastname;
  }

  public setUserEmail(email: string) {
    this.user.email = email;
  }

  public setUserPermissions(permissions: number[]) {
    this.user.permissions = permissions;
  }

  public saveUser() {
    // HTTP request to save user
  }
}
