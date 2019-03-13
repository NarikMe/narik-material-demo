import { NarikCommonModule } from "narik-common";
import {
  NarikMatBusyIndicatorModule,
  NarikMatButtonModule,
  NarikMatInputModule
} from "narik-ui-material";

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";

import { COMPONENTS } from "./index";
import { ChangePassComponent } from "./change-password/change-password.component";

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    TranslateModule.forChild(),
    MatCardModule,
    FormsModule,
    NarikMatInputModule,
    NarikMatButtonModule,
    NarikMatBusyIndicatorModule,
    NarikCommonModule
  ],
  declarations: [COMPONENTS],
  exports: [],
  providers: [],
  entryComponents: [ChangePassComponent]
})
export class MainModule {}
