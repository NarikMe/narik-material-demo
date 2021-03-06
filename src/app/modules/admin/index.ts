import { WIDGET_COMPONENTS } from "./widgets/index";
import { Provider } from "@angular/core";

import { AdminMainViewComponent } from "./main-view/admin-main-view.component";
import { AdminMainComponent } from "./main/admin-main.component";
import { ColorPickerComponent } from "./color-picker/color-picker.component";
import { CustomEntityEditComponent } from "./custom-entity/custom-entity-edit.component";

export const COMPONENTS: Provider[] = [
  AdminMainViewComponent,
  AdminMainComponent,
  CustomEntityEditComponent,
  ColorPickerComponent,
  ...WIDGET_COMPONENTS
];

export const ENTRY_COMPONENTS: Provider[] = [CustomEntityEditComponent];
