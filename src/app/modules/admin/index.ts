import { Provider } from "@angular/core";

import { AdminMainViewComponent } from "./main-view/admin-main-view.component";
import { AdminMainComponent } from "./main/admin-main.component";

export const COMPONENTS: Provider[] = [
  AdminMainViewComponent,
  AdminMainComponent
];

export const ENTRY_COMPONENTS: Provider[] = [];
