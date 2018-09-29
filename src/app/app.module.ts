import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserFormComponent } from "./user-form/user-form.component";
import { PermissionsFormComponent } from "./permissions-form/permissions-form.component";

import { UserService } from "./shared/user/user.service";
import { MaterialModule } from "./shared/material.module";
import { ConfirmationFormComponent } from './confirmation-form/confirmation-form.component';

@NgModule({
  declarations: [AppComponent, UserFormComponent, PermissionsFormComponent, ConfirmationFormComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
