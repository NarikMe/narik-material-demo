import { NarikBaseTemplate } from "narik-core";
import { Widget } from "./base-widget";
import { Component } from "@angular/core";

@NarikBaseTemplate("widget")
@Component({
  selector: "widget-type3",
  template: `
  <ng-template #widgetTitle>
  <h5 class="card-title"> custom title:{{ title }}</h5>
  </ng-template>
`
})
export class WidgetType3 extends Widget {}
