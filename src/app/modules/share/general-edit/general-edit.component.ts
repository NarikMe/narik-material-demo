import { Component, forwardRef, Injector } from '@angular/core';
import { HOST_TOKEN } from '@narik/infrastructure';
import { NarikUiEditForm } from '@narik/ui-lib';

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
