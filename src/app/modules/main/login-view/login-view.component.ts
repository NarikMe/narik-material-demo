import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import {
  AuthenticationService,
  LoginModel,
  LoginResult,
  DialogService,
  NarikComponent
} from "narik-infrastructure";
import { findBestRouteAfterLogin } from "narik-common";

@Component({
  templateUrl: "login-view.component.html",
  styleUrls: ["login-view.component.css"]
})
export class LoginViewComponent extends NarikComponent implements OnInit {
  loginModel: LoginModel = {
    password: "",
    userName: ""
  };
  onNavigationg = false;
  returnUrl = "";
  private _isBusy: boolean;
  set isBusy(value: boolean) {
    this._isBusy = value;
  }
  get isBusy(): boolean {
    return this._isBusy;
  }
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private dialogService: DialogService
  ) {
    super();
    if (this.authenticationService.currentUserValue) {
      let matchUrl = "";
      if (!this.returnUrl) {
        matchUrl = findBestRouteAfterLogin(
          this.router.config,
          this.authenticationService.currentUserValue.roles
        );
      }
      if (matchUrl || this.returnUrl) {
        this.onNavigationg = true;
        this.router.navigateByUrl(this.returnUrl || matchUrl);
      }
    }
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"];
  }
  login() {
    if (!this.loginModel.userName || !this.loginModel.password) {
      this.dialogService.error("errors.invalid_form");
    } else {
      this.isBusy = true;
      this.authenticationService.login(this.loginModel).then(
        (result: LoginResult) => {
          if (result.succeeded) {
            let matchUrl = "";
            if (!this.returnUrl) {
              matchUrl = findBestRouteAfterLogin(
                this.router.config,
                result.loginedUser.roles
              );
            }
            if (!matchUrl && !this.returnUrl) {
              this.isBusy = false;
              this.dialogService.error("errors.invalid_role");
            } else {
              this.router.navigateByUrl(this.returnUrl || matchUrl);
            }
          } else {
            this.isBusy = false;
            this.dialogService.error(result.errors);
          }
        },
        err => {
          this.isBusy = false;
        }
      );
    }
  }
}
