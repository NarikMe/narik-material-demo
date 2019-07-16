import { Provider } from "@angular/core";
import { SaleMainViewComponent } from "./main-view/sale-main-view.component";
import { SaleMainComponent } from "./main/sale-main.component";

export const COMPONENTS: Provider[] = [
  SaleMainViewComponent,
  SaleMainComponent
];

export const ENTRY_COMPONENTS: Provider[] = [];
