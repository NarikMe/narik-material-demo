import { WidgetViewComponent } from "./widgets/widget-view/widget-view.component";
import { COMPONENTS, ENTRY_COMPONENTS } from "./index";
import { NgModule, Injector } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminMainComponent } from "./main/admin-main.component";
import { AdminMainViewComponent } from "./main-view/admin-main-view.component";
import {
  FormViewRoute,
  NarikAppCoreModule,
  ModuleLoadCompletelyGuard
} from "@narik/app-core";
import { CommonModule } from "@angular/common";
import { ShareModule } from "../share/share.module";
import { NarikUiMaterialModule } from "@narik/ui-material";
import { FormsModule } from "@angular/forms";
import { NarikNgxAdmin } from "../narik-ngx-admin/narik-ngx-admin.module";
import {
  MODULE_UI_KEY,
  MODULE_DATA_KEY,
  ModuleInfo,
  AuthenticationService,
  DialogService,
  EntityTypeService
} from "@narik/infrastructure";
import { NarikModule } from "@narik/core";
import { Observable } from "rxjs/internal/Observable";
import { NbMenuService } from "@nebular/theme";
import { filter } from "rxjs/internal/operators/filter";
import { map } from "rxjs/internal/operators/map";
import { ChangePassComponent } from "../main/change-password/change-password.component";
import { DynamicFormService } from "@narik/ui-core";
import { MccColorPickerModule } from "material-community-components";
import { NarikCommonModule } from "@narik/common";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ColorPickerComponent } from "./color-picker/color-picker.component";
import { MatCardModule } from "@angular/material/card";
import { ClassValidation } from "./class-validation-sample/class-validation-sample";

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
          {
            path: "",
            component: AdminMainViewComponent,
            data: { title: "dashboard" }
          },
          {
            path: "widgets",
            component: WidgetViewComponent
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
    NarikCommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MccColorPickerModule.forRoot({
      used_colors: ["#000000", "#123456", "#777666"],
      empty_color: "transparent"
    })
  ],
  declarations: [COMPONENTS],
  exports: [],
  entryComponents: [ColorPickerComponent, ENTRY_COMPONENTS],
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
    nbMenuService: NbMenuService,
    authenticationService: AuthenticationService,
    dialogService: DialogService,
    ets: EntityTypeService,
    dfs: DynamicFormService
  ) {
    super(injector);

    dfs.addDynamicFormComponent("color", ColorPickerComponent);
    ets.addTypeCreator("classValidation", () => new ClassValidation());
    nbMenuService
      .onItemClick()
      .pipe(
        filter(({ tag }) => tag === "user-context-menu"),
        map(({ item: { data } }) => data)
      )
      .subscribe(item => {
        if (item === "logout") {
          authenticationService.logout();
        } else if (item === "changePass") {
          dialogService.showDialog(
            ChangePassComponent,
            undefined,
            undefined,
            [],
            {
              showBackdrop: true,
              disableAutoClose: true
            }
          );
        }
      });
  }

  get key() {
    return moduleKey;
  }
  get moduleInfo(): Observable<ModuleInfo> {
    return this.loadInfoFromJson();
  }
}
