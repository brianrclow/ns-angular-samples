import { Component } from '@angular/core';
import { Color, Dialogs, Frame, isIOS } from '@nativescript/core';

@Component({
  selector: 'ns-angular-samples-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss'],
})
export class ActionComponent {
  showNativeScriptAction() {
    const actionOptions = {
      title: 'Race selection',
      message: 'Choose your race',
      cancelButtonText: 'Cancel',
      actions: ['Human', 'Elf', 'Dwarf', 'Orc', 'Unicorn'],
      cancelable: true, // Android only
    };

    Dialogs.action(actionOptions).then((result) => {
      console.log('Dialog result: ', result);
      if (result === 'Options1') {
        // Do action 1
      } else if (result === 'Option2') {
        // Do action 2
      }
    });
  }

  showNativeAction() {
    if (isIOS) {
      const alertController =
        UIAlertController.alertControllerWithTitleMessagePreferredStyle(
          'Native iOS Action',
          'you can change the actions and colors',
          UIAlertControllerStyle.ActionSheet
        );

      // Here are some premade styling. The destructive by default is red on IOS. You can select default for them all or use existing.
      const editAction = UIAlertAction.actionWithTitleStyleHandler(
        'Edit',
        UIAlertActionStyle.Default,
        (arg: UIAlertAction) => {
          //code implementation here
        }
      );
      const deleteAction = UIAlertAction.actionWithTitleStyleHandler(
        'Delete',
        UIAlertActionStyle.Default,
        (arg: UIAlertAction) => {
          // changing UIAlertActionStyle.Destructive to UIAlertActionStyle.Default allowed for the tint to be updated down below
          //code implementation here
        }
      );
      const cancelAction = UIAlertAction.actionWithTitleStyleHandler(
        'Cancel',
        UIAlertActionStyle.Cancel,
        (arg: UIAlertAction) => {
          //code implementation here
        }
      );

      alertController.addAction(editAction);
      alertController.addAction(deleteAction);
      alertController.addAction(cancelAction);

      // This is how you can force change the color of the title text on the actions (buttons).
      alertController.view.tintColor = new Color('#000000').ios; // Color is a class in Nativescript, if we you want the Native IOS value, this is how you do it.

      // alertController.editButtonItem.tintColor = new Color("#000000").ios;

      // alertController = new Color("#000000").ios;

      // editAction.setValueForKey(new Color('black').ios, 'titleTextColor');

      const currentPage = Frame.topmost().currentPage;
      const viewController: UIViewController = currentPage.ios;
      viewController.presentModalViewControllerAnimated(alertController, true);
    } else {
      const actionOptions = {
        title: 'Native Android Action',
        message: 'not supported yet...',
        cancelButtonText: 'Cancel',
        actions: ['iOS simulator', 'physical device'],
        cancelable: true, // Android only
      };

      Dialogs.action(actionOptions).then((result) => {
        console.log('Dialog result: ', result);
        if (result === 'Options1') {
          // Do action 1
        } else if (result === 'Option2') {
          // Do action 2
        }
      });
    }
  }
}
