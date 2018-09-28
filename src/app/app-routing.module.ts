import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserFormComponent } from "./user-form/user-form.component";

const routes: Routes = [
  { path: "new-user", component: UserFormComponent },
  { path: "", redirectTo: "/new-user", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
