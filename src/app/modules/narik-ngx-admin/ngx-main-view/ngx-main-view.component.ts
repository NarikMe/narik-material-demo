import { NarikTranslateService } from "narik-core";
import {
  NarikComponent,
  FormTitleResolver,
  MODULE_UI_KEY,
  MetaDataService
} from "narik-infrastructure";
import { filter } from "rxjs/internal/operators/filter";
import { map } from "rxjs/internal/operators/map";

import { Component, Input, OnInit, Injector } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { NbMenuItem } from "@nebular/theme";
import { takeWhile } from "rxjs/internal/operators/takeWhile";

@Component({
  selector: "ngx-main-view",
  templateUrl: "ngx-main-view.component.html",
  styleUrls: ["ngx-main-view.component.scss"]
})
export class NgxMainViewComponent extends NarikComponent implements OnInit {
  _menuItems: NbMenuItem[];
  title: string;
  _translateMenu = true;

  @Input()
  set translateMenu(value: boolean) {
    this._translateMenu = value;
  }
  get translateMenu(): boolean {
    return this._translateMenu;
  }

  @Input()
  navigationType = "route";

  @Input()
  set menuItems(value: NbMenuItem[]) {
    this._menuItems = value;
  }
  get menuItems(): NbMenuItem[] {
    return this._menuItems;
  }

  @Input() headerTitle = "";
  @Input() menuHeader = "";

  constructor(
    private translateService: NarikTranslateService,
    router: Router,
    injector: Injector,
    metaDataService: MetaDataService,
    activatedRoute: ActivatedRoute,
    private formTitleResolver: FormTitleResolver,
    private titleService: Title
  ) {
    super();

    const moduleUiKey = injector.get(MODULE_UI_KEY);
    const viewOptions = metaDataService.getValue<any>(
      moduleUiKey,
      "viewOptions"
    );

    router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let route = activatedRoute;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter(route => route.outlet === "primary"),
        takeWhile(x => this.isAlive)
      )
      .subscribe(ar => {
        this.title = this.formTitleResolver.resolveTitle(ar.snapshot);
        this.titleService.setTitle(this.title);
      });
  }

  ngOnInit() {
    if (this.menuItems && this.translateMenu) {
      this.translateMenuTitles(this.menuItems);
    }
  }

  translateMenuTitles(menuItems) {
    for (const item of menuItems) {
      item.title = this.translateService.instant(item.title);
      if (item.children) {
        this.translateMenuTitles(item.children);
      }
    }
  }
}
