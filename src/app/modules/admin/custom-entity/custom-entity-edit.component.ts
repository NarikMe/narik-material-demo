import { Component, Injector } from "@angular/core";
import { NarikEditForm } from "@narik/app-core";
import { CustomEntity } from "./custom-entity";
import { DynamicForm } from "@narik/core";
import { FormGroup } from "@angular/forms";

@DynamicForm("CustomEntityEditComponent")
@Component({
  templateUrl: "custom-entity-edit.component.html",
})
export class CustomEntityEditComponent extends NarikEditForm<CustomEntity> {
  constructor(injector: Injector) {
    super(injector);

    this.formBuilt$.subscribe((form: FormGroup) => {
      this.form.valueChanges.subscribe((formValue: any) => {
        this.currentEntity = Object.assign(this.currentEntity, formValue);
      });
    });
  }

  get entityTypeCreator() {
    return () => new CustomEntity();
  }
}
