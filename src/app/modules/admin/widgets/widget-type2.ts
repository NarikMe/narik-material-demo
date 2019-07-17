import { Widget } from "./base-widget";
import { Component } from "@angular/core";
import { NarikBaseTemplate } from "narik-core";

@NarikBaseTemplate("widget")
@Component({
  selector: "widget-type2",
  template: `
    <ng-template #widgetContent>
      Hi! I'm Widget of type 2!

      <div>content: {{ content }}</div>
      <div class="mb-2">
        <narik-button label="add to Content" (click)="content = content + 'C'">
        </narik-button>
      </div>
    </ng-template>
  `
})
export class WidgetType2 extends Widget {
  content = "C";

  propmt() {
    alert(this.content);
  }
}
