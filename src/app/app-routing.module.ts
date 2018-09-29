import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserFormComponent } from "./user-form/user-form.component";
import { PermissionsFormComponent } from "./permissions-form/permissions-form.component";
import { ConfirmationFormComponent } from "./confirmation-form/confirmation-form.component";

const routes: Routes = [
  { path: "new-user", component: UserFormComponent },
  { path: "permission", component: PermissionsFormComponent },
  { path: "confirm", component: ConfirmationFormComponent },
  { path: "", redirectTo: "/new-user", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
