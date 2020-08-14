import { Widget } from "./base-widget";
import { Component } from "@angular/core";


@Component({
  selector: "widget-type1",
  templateUrl: "widget-type1.html"
})
export class WidgetType1 extends Widget {
  counter = 0;

  prompt() {
    alert(this.counter);
  }
}
