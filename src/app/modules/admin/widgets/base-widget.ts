import { Input } from "@angular/core";

export class Widget {
  @Input()
  title: string;

  @Input()
  description: string;

  prompt() {
    alert(this.title);
  }
}
