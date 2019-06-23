import { MetaDataService, MODULE_UI_KEY } from "narik-infrastructure";

import { Component, Inject } from "@angular/core";

@Component({
  templateUrl: "admin-main.component.html"
})
export class AdminMainComponent {
  menuItems: any[];

  /**
   *
   */
  constructor(
    metaDataService: MetaDataService,
    @Inject(MODULE_UI_KEY) moduleKey: string
  ) {
    this.menuItems = metaDataService.getValue<any[]>(moduleKey, "menuItems");
  }
}
