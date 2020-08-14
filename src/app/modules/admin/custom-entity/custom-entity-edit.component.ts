import { Component, Injector } from "@angular/core";
import { NarikEditForm } from "@narik/app-core";
import { CustomEntity } from "./custom-entity";
import { DynamicForm } from "@narik/core";

@DynamicForm("CustomEntityEditComponent")
@Component({
  templateUrl: "custom-entity-edit.component.html",
})
export class CustomEntityEditComponent extends NarikEditForm<CustomEntity> {
  constructor(injector: Injector) {
    super(injector);
  }

  get entityTypeCreator() {
    return () => new CustomEntity();
  }
}
