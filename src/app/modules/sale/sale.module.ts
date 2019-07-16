import { COMPONENTS } from "./index";
import { NgModule, Injector } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {
  FormViewRoute,
  NarikAppCoreModule,
  ModuleLoadCompletelyGuard
} from "narik-app-core";
import { CommonModule } from "@angular/common";
import { ShareModule } from "../share/share.module";
import { NarikUiMaterialModule } from "narik-ui-material";
import { FormsModule } from "@angular/forms";
import { NarikNgxAdmin } from "../narik-ngx-admin/narik-ngx-admin.module";
import {
  MODULE_UI_KEY,
  MODULE_DATA_KEY,
  ModuleInfo
} from "narik-infrastructure";
import { NarikModule } from "narik-core";
import { Observable } from "rxjs/internal/Observable";
import { NarikCommonModule } from "narik-common";
import { SaleMainComponent } from "./main/sale-main.component";
import { SaleMainViewComponent } from "./main-view/sale-main-view.component";

const moduleKey = "sale";
const routes: Routes = [
  {
    path: "",
    component: SaleMainComponent,
    canActivate: [ModuleLoadCompletelyGuard],
    data: { moduleKey: moduleKey },
    children: [
      {
        path: "",
        children: [
          {
            path: "",
            component: SaleMainViewComponent,
            data: { title: "SaleDashboard" }
          },
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
    NarikNgxAdmin,
    NarikCommonModule
  ],
  declarations: [COMPONENTS],
  exports: [],
  entryComponents: [],
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
export class SaleModule extends NarikModule {
  constructor(injector: Injector) {
    super(injector);
  }

  get key() {
    return moduleKey;
  }
  get moduleInfo(): Observable<ModuleInfo> {
    return this.loadInfoFromJson();
  }
}
