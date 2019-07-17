import { Provider } from "@angular/core";
import { WidgetType2 } from "./widget-type2";
import { WidgetType1 } from "./widget-type1";
import { WidgetType3 } from "./widget-type3";
import { WidgetViewComponent } from "./widget-view/widget-view.component";

export const WIDGET_COMPONENTS: Provider[] = [
  WidgetType1,
  WidgetType2,
  WidgetType3,
  WidgetViewComponent
];
