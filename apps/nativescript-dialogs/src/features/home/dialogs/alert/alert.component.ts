import { Component } from '@angular/core';
import { Dialogs } from '@nativescript/core';

@Component({
  selector: 'ns-angular-samples-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {

  showAlert() {
    const alertOptions = {
      title: 'Warning',
      message: 'Something terrible has happened.',
      okButtonText: 'Okay',
      cancelable: false // [Android only] Gets or sets if the dialog can be canceled by taping outside of the dialog.
    }

    Dialogs.alert(alertOptions).then(() => {
      console.log('Race chosen!')
    })
  }
}
