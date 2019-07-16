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
    loadChildren: () =>
      import("./modules/admin/admin.module").then(m => m.AdminModule)
  },
  {
    path: "sale",
    canActivate: [UserIsAuthorizedGuard],
    loadChildren: () =>
      import("./modules/sale/sale.module").then(m => m.SaleModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // You should set onSameUrlNavigation to "reload" if you want to use "tab" outlet.
      // onSameUrlNavigation: "reload"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
