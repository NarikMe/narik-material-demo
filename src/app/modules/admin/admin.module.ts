import { COMPONENTS } from "./index";
import { NgModule, Injector } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminMainComponent } from "./main/admin-main.component";
import { AdminMainViewComponent } from "./main-view/admin-main-view.component";
import {
  FormViewRoute,
  NarikAppCoreModule,
  ModuleLoadCompletelyGuard
} from "narik-app-core";
import { CommonModule } from "@angular/common";
import { ShareModule } from "../share/share.module";
import { NarikUiMaterialModule } from "narik-ui-material";
import { FormsModule } from "@angular/forms";

import {
  MODULE_UI_KEY,
  MODULE_DATA_KEY,
  ModuleInfo,
  AuthenticationService,
  DialogService
} from "narik-infrastructure";
import { NarikModule } from "narik-core";
import { Observable } from "rxjs/internal/Observable";
import { filter } from "rxjs/internal/operators/filter";
import { map } from "rxjs/internal/operators/map";
import { ChangePassComponent } from "../main/change-password/change-password.component";
import { NarikCoreUiAdmin } from "../narik-coreui-admin/narik-coreui-admin.module";

const moduleKey = "admin";
const routes: Routes = [
  {
    path: "",
    component: AdminMainComponent,
    canActivate: [ModuleLoadCompletelyGuard],
    data: { moduleKey: moduleKey },
    children: [
      {
        path: "",
        children: [
          { path: "", component: AdminMainViewComponent },
          ...FormViewRoute(moduleKey)
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ShareModule,
    NarikUiMaterialModule,
    NarikAppCoreModule,
    FormsModule,
    NarikCoreUiAdmin
  ],
  declarations: [COMPONENTS],
  exports: [],
  providers: [
    {
      provide: MODULE_UI_KEY,
      useValue: moduleKey
    },
    {
      provide: MODULE_DATA_KEY,
      useValue: "NarikDemo"
    }
  ]
})
export class AdminModule extends NarikModule {
  constructor(
    injector: Injector,
    authenticationService: AuthenticationService,
    dialogService: DialogService
  ) {
    super(injector);
  }

  get key() {
    return moduleKey;
  }
  get moduleInfo(): Observable<ModuleInfo> {
    return this.loadInfoFromJson();
  }
}
