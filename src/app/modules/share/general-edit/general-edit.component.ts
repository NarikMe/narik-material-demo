import { Component, forwardRef, Injector } from '@angular/core';
import { DynamicForm } from '@narik/core';
import { HOST_TOKEN } from '@narik/infrastructure';
import { NarikUiEditForm } from '@narik/ui-lib';

@DynamicForm('GeneralEditComponent')
@Component({
  templateUrl: 'general-edit.component.html',
  providers: [
    {
      provide: HOST_TOKEN,
      useExisting: forwardRef(() => GeneralEditComponent),
    },
  ],
})
export class GeneralEditComponent extends NarikUiEditForm<any> {
  constructor(injector: Injector) {
    super(injector);
  }
}
