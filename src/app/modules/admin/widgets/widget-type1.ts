import { NarikBaseTemplate } from "narik-core";
import { Widget } from "./base-widget";
import { Component } from "@angular/core";

@NarikBaseTemplate("widget")
@Component({
  selector: "widget-type1",
  template: `
  <ng-template #widgetContent>
    Hi! I'm Widget of type 3!

    <div>counter: {{ counter }}</div>
    <div class="mb-2">
      <narik-button label="add to Content" (click)="counter=counter+1">
      </narik-button>
    </div>
  </ng-template>
`
})
export class WidgetType1 extends Widget {
  counter = 0;

  prompt() {
    alert(this.counter);
  }
}
