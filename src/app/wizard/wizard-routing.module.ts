import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserFormComponent } from "./user-form/user-form.component";
import { PermissionsFormComponent } from "./permissions-form/permissions-form.component";
import { ConfirmationFormComponent } from "./confirmation-form/confirmation-form.component";

const routes: Routes = [
  { path: "wizard/new-user", component: UserFormComponent },
  { path: "wizard/permission", component: PermissionsFormComponent },
  { path: "wizard/confirm", component: ConfirmationFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WizardRoutingModule {}
