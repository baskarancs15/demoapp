import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminDashComponent } from "../app/components/admin-dash/admin-dash.component";
import { RegisterFormComponent } from "../app/components/register-form/register-form.component";
import { DashboardComponent } from "../app/components/dashboard/dashboard.component";
import { LoginComponent } from "../app/components/login/login.component";
import { UserDashComponent } from "../app/components/user-dash/user-dash.component";
const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent
  },

  {
    path: "admin-dash",
    component: AdminDashComponent
  },
  {
    path: "user-dash",
    component: UserDashComponent
  },
  {
    path: "register",
    component: RegisterFormComponent
  },
  {
    path: "login",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
