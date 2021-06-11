import { Component } from '@angular/core';
import { DialogActions } from '@narik/core';
import { DialogService } from '@narik/infrastructure';

@Component({
  templateUrl: 'admin-main-view.component.html',
  styleUrls: ['admin-main-view.component.css'],
})
export class AdminMainViewComponent {
  events = {
    click: () => {
      alert(2222);
    },
  };
  constructor(private dialogService: DialogService) {}
  // do() {
  //   this.dialogService
  //     .showDialog(
  //       'input',
  //       'title',
  //       {
  //         value: 'click Me',
  //         type: 'button',
  //       },
  //       [DialogActions.cancel]
  //     )
  //     .closed.then((res) => {
  //       console.log(res);
  //     });
  // }
}
