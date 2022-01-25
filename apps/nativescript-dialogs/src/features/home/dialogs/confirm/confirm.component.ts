import { Component } from '@angular/core';
import { Dialogs } from '@nativescript/core'

@Component({
  selector: 'ns-angular-samples-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent {


  showConfirmDialog() {
    const confirmOptions = {
      title: 'Race selection',
      message: 'Are you sure you want to be a Unicorn?',
      okButtonText: 'Yes',
      cancelButtonText: 'No',
      neutralButtonText: 'Cancel'
    }

    Dialogs.confirm(confirmOptions).then(result => {
      console.log(result)
    })
  }
}
