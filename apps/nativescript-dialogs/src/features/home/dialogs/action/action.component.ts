import { Component } from '@angular/core';
import { Dialogs } from '@nativescript/core'

@Component({
  selector: 'ns-angular-samples-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent {

  showAction() {
    const actionOptions = {
      title: 'Race selection',
      message: 'Choose your race',
      cancelButtonText: 'Cancel',
      actions: ['Human', 'Elf', 'Dwarf', 'Orc', 'Unicorn'],
      cancelable: true // Android only
    }

    Dialogs.action(actionOptions).then(result => {
      console.log('Dialog result: ', result)
      if (result === 'Options1') {
        // Do action 1
      } else if (result === 'Option2') {
        // Do action 2
      }
    })
  }

}
