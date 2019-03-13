import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginViewComponent } from "./modules/main/login-view/login-view.component";
import {
  UserIsAuthenticatedGuard,
  UserIsAuthorizedGuard
} from "narik-app-core";

const routes: Routes = [
  {
    path: "",
    component: LoginViewComponent
  },
  {
    path: "index",
    component: LoginViewComponent
  },
  {
    path: "admin",
    data: { authorizeTag: ["1"] },
    canActivate: [UserIsAuthenticatedGuard, UserIsAuthorizedGuard],
    loadChildren: "./modules/admin/admin.module#AdminModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
