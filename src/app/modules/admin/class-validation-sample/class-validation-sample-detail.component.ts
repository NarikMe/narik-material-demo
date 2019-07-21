import { Component, Injector } from "@angular/core";
import { NarikDetailForm } from "narik-app-core";
import { NarikBaseTemplate } from "narik-core";
import { ClassValidation } from "./class-validation-sample";

@NarikBaseTemplate("NarikDetailUi")
@Component({
  templateUrl: "class-validation-sample-detail.component.html"
})
export class ClassValidationDetailComponent extends NarikDetailForm<
  ClassValidation
> {
  static readonly COMPONENT_NAME = "ClassValidationDetailComponent";
  constructor(injector: Injector) {
    super(injector);
  }

  get entityTypeCreator() {
    return () => new ClassValidation();
  }
}
