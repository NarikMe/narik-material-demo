import { Component, Injector } from "@angular/core";
import { NarikDetailForm } from "@narik/app-core";
import { CustomEntity } from "./custom-entity";
import { NarikBaseTemplate, DynamicForm } from "@narik/core";
import { validate, ValidationError } from "class-validator";
import { formatString } from "@narik/common";

@DynamicForm("CustomEntityDetailComponent")
@NarikBaseTemplate("NarikDetailUi")
@Component({
  templateUrl: "custom-entity-detail.component.html"
})
export class CustomEntityDetailComponent extends NarikDetailForm<CustomEntity> {
  constructor(injector: Injector) {
    super(injector);
  }

  get entityTypeCreator() {
    return () => new CustomEntity();
  }
}
