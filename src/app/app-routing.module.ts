import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserFormComponent } from "./user-form/user-form.component";
import { PermissionsFormComponent } from "./permissions-form/permissions-form.component";

const routes: Routes = [
  { path: "new-user", component: UserFormComponent },
  { path: "permissions", component: PermissionsFormComponent },
  { path: "", redirectTo: "/new-user", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
