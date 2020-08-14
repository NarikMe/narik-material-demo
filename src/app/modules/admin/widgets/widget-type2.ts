import { Widget } from "./base-widget";
import { Component } from "@angular/core";

@Component({
  selector: "widget-type2",
  templateUrl: "widget-type2.html",
})
export class WidgetType2 extends Widget {
  content = "C";

  prompt() {
    alert(this.content);
  }
}
