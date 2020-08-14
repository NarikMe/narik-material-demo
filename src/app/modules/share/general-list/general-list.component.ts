import { Component, Injector } from "@angular/core";
import { DynamicForm } from "@narik/core";
import { NarikUiListForm } from "@narik/ui-lib";

@DynamicForm("GeneralListComponent")
@Component({
  templateUrl: "general-list.component.html",
})
export class GeneralListComponent extends NarikUiListForm<any> {
  constructor(injector: Injector) {
    super(injector);
  }
}
