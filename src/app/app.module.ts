import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AdminDashComponent } from "./components/admin-dash/admin-dash.component";

import { UserDashComponent } from "./components/user-dash/user-dash.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterFormComponent } from "./components/register-form/register-form.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AdminDashComponent,
    UserDashComponent,
    LoginComponent,
    RegisterFormComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
