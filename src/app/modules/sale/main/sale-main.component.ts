import { MetaDataService, MODULE_UI_KEY } from "narik-infrastructure";

import { Component, Inject } from "@angular/core";
import { NbMenuItem } from "@nebular/theme";

@Component({
  templateUrl: "sale-main.component.html"
})
export class SaleMainComponent {
  menuItems: NbMenuItem[];

  constructor(
    metaDataService: MetaDataService,
    @Inject(MODULE_UI_KEY) moduleKey: string
  ) {
    this.menuItems = metaDataService.getValue<NbMenuItem[]>(
      moduleKey,
      "menuItems"
    );
  }
}
