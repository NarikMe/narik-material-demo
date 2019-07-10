import { Provider } from "@angular/core";

import { AdminMainViewComponent } from "./main-view/admin-main-view.component";
import { AdminMainComponent } from "./main/admin-main.component";
import { ColorPickerComponent } from "./color-picker/color-picker.component";

export const COMPONENTS: Provider[] = [
  AdminMainViewComponent,
  AdminMainComponent,
  ColorPickerComponent
];

export const ENTRY_COMPONENTS: Provider[] = [];
