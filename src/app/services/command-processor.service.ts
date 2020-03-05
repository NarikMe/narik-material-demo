import { NarikHttpService } from "@narik/core";
import {
  CommandProcessor,
  CommandHost,
  CommandInfo,
  FieldTypes,
  DialogResult,
  DialogInputContent
} from "@narik/infrastructure";
import { Injectable } from "@angular/core";
@Injectable()
export class DemoCommandProcessor implements CommandProcessor {
  constructor(private httpService: NarikHttpService) {}
  processCommand(sender: CommandHost, cmd: CommandInfo) {
    const senderOfAny = sender as any;
    if (senderOfAny.config && senderOfAny.config.entityKey) {
      switch (senderOfAny.config.entityKey) {
        case "userAccount": {
          if (cmd.commandKey === "role") {
            senderOfAny.isBusy = true;
            this.httpService
              .get(
                `api/UserAction/GetUserRole?userId=${
                  senderOfAny.currentEntity.viewModelId
                }`
              )
              .subscribe(currentRole => {
                senderOfAny.isBusy = false;
                senderOfAny.dialogService.showInput(
                  "",
                  "selectRole",
                  [
                    {
                      name: "role",
                      fieldType: FieldTypes.Radio,
                      options: {
                        placeHolder: "title"
                      },
                      dataInfo: {
                        dataKey: "Role",
                        dataProviderKey: "remote"
                      }
                    }
                  ],
                  {
                    role: currentRole
                  },
                  (x: DialogResult<DialogInputContent>) => {
                    if (x.dialogResult === "ok" && x.data && x.data.role) {
                      senderOfAny.isBusy = true;
                      this.httpService
                        .post(`api/UserAction/UpdateRoles`, {
                          value: senderOfAny.currentEntity.viewModelId,
                          value1: [x.data.role]
                        })
                        .subscribe(() => {
                          senderOfAny.isBusy = false;
                        });
                    }
                  },
                  undefined,
                  {
                    defaultAction: "cancel",
                    showBackdrop: true,
                    disableAutoClose: true
                  }
                );
              });
          }
          break;
        }
        default:
          break;
      }
    }
  }
}
