import { Component, OnInit, Inject } from "@angular/core";
import { Router } from "@angular/router";
import {
  LoginResult,
  DialogService,
  NarikComponent,
  DialogRef,
  DIALOG_REF
} from "@narik/infrastructure";
import { findBestRouteAfterLogin } from "@narik/common";
import { NarikHttpService } from "@narik/core";

@Component({
  templateUrl: "change-password.component.html"
})
export class ChangePassComponent extends NarikComponent implements OnInit {
  loginModel: any = {
    password: "",
    oldPassword: "",
    rePassword: ""
  };
  returnUrl = "";
  _isBusy: boolean;
  set isBusy(value: boolean) {
    this._isBusy = value;
  }
  get isBusy(): boolean {
    return this._isBusy;
  }
  constructor(
    private httpService: NarikHttpService,
    private dialogService: DialogService,
    @Inject(DIALOG_REF) public dialog: DialogRef<any>
  ) {
    super();
  }

  ngOnInit() {}
  doChangePassword() {
    if (
      !this.loginModel.oldPassword ||
      !this.loginModel.password ||
      !this.loginModel.rePassword
    ) {
      this.dialogService.error("errors.invalid_form");
    } else if (this.loginModel.password !== this.loginModel.rePassword) {
      this.dialogService.error("errors.password_mismatch");
    } else {
      this.isBusy = true;
      this.httpService
        .post(`api/account/ChangePassword`, this.loginModel)
        .subscribe(
          (result: any) => {
            this.isBusy = false;
            if (result.isSucceed) {
              this.dialogService.showMessage("info.submit-succeed");
              this.dialog.close();
            } else {
              this.dialogService.error(result.errors[0]);
            }
          },
          err => {
            this.isBusy = false;
          }
        );
    }
  }
}
