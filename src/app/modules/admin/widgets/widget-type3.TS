import { NarikBaseTemplate } from "@narik/core";
import { Widget } from "./base-widget";
import { Component } from "@angular/core";

@NarikBaseTemplate("widget")
@Component({
  selector: "widget-type3",
  templateUrl: "widget-type3.html"
})
export class WidgetType3 extends Widget {}
