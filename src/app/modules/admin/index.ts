import { WIDGET_COMPONENTS } from "./widgets/index";
import { Provider } from "@angular/core";

import { AdminMainViewComponent } from "./main-view/admin-main-view.component";
import { AdminMainComponent } from "./main/admin-main.component";
import { ColorPickerComponent } from "./color-picker/color-picker.component";
import { CustomEntityDetailComponent } from "./custom-entity/custom-entity-detail.component";

export const COMPONENTS: Provider[] = [
  AdminMainViewComponent,
  AdminMainComponent,
  CustomEntityDetailComponent,
  ColorPickerComponent,
  ...WIDGET_COMPONENTS
];

export const ENTRY_COMPONENTS: Provider[] = [
  ...WIDGET_COMPONENTS,
  CustomEntityDetailComponent
];
