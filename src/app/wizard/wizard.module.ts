import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { WizardRoutingModule } from "./wizard-routing.module";
import { WizardComponent } from "./wizard.component";
import { UserFormComponent } from "./user-form/user-form.component";
import { PermissionsFormComponent } from "./permissions-form/permissions-form.component";

import { UserService } from "../shared/user/user.service";
import { RoleService } from "../shared/role/role.service";
import { MaterialModule } from "../shared/material.module";
import { ConfirmationFormComponent } from "./confirmation-form/confirmation-form.component";

@NgModule({
  declarations: [
    WizardComponent,
    UserFormComponent,
    PermissionsFormComponent,
    ConfirmationFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    WizardRoutingModule
  ],
  exports: [WizardComponent],
  entryComponents: [WizardComponent],
  providers: [UserService, RoleService]
})
export class WizardModule {}
