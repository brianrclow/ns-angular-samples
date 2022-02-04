import { Component } from '@angular/core';
import { Color, Dialogs, isIOS } from '@nativescript/core';
import { Frame } from '@nativescript/core/ui/frame';

@Component({
  selector: 'ns-angular-samples-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {

  showDefaultAlertDialog() {
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

  showIOSAlertDialog() {


    if (isIOS) {
      const alertController = UIAlertController.alertControllerWithTitleMessagePreferredStyle("title", "message", UIAlertControllerStyle.Alert);

      // Here are some premade styling. The destructive by default is red on IOS. You can select default for them all or use existing.
      const editAction = UIAlertAction.actionWithTitleStyleHandler("Edit", UIAlertActionStyle.Default, (arg: UIAlertAction) => {
        //code implementation here
      });
      const deleteAction = UIAlertAction.actionWithTitleStyleHandler("Delete", UIAlertActionStyle.Destructive, (arg: UIAlertAction) => {
        //code implementation here
      });
      const cancelAction = UIAlertAction.actionWithTitleStyleHandler("Cancel", UIAlertActionStyle.Cancel, (arg: UIAlertAction) => {
        //code implementation here
      });

      alertController.addAction(editAction);
      alertController.addAction(deleteAction);
      alertController.addAction(cancelAction);

      // This is how you can force change the color of the title text on the actions (buttons).
      // alertController.view.tintColor = new Color("#000000").ios; // Color is a class in Nativescript, if we you want the Native IOS value, this is how you do it.

      // alertController.editButtonItem.tintColor = new Color("#000000").ios;

      // alertController = new Color("#000000").ios;

      // editAction.setValueForKey(new Color('red').ios, 'titleTextColor');



      const currentPage = Frame.topmost().currentPage;
      const viewController: UIViewController = currentPage.ios;
      viewController.presentModalViewControllerAnimated(alertController, true);
    }
  }


  showIOSActionSheetDialog() {


    if (isIOS) {
      const alertController = UIAlertController.alertControllerWithTitleMessagePreferredStyle("title", "message", UIAlertControllerStyle.ActionSheet);

      // Here are some premade styling. The destructive by default is red on IOS. You can select default for them all or use existing.
      const editAction = UIAlertAction.actionWithTitleStyleHandler("Edit", UIAlertActionStyle.Default, (arg: UIAlertAction) => {
        //code implementation here
      });
      const deleteAction = UIAlertAction.actionWithTitleStyleHandler("Delete", UIAlertActionStyle.Default, (arg: UIAlertAction) => { // changing UIAlertActionStyle.Destructive to UIAlertActionStyle.Default allowed for the tint to be updated down below
        //code implementation here
      });
      const cancelAction = UIAlertAction.actionWithTitleStyleHandler("Cancel", UIAlertActionStyle.Cancel, (arg: UIAlertAction) => {
        //code implementation here
      });

      alertController.addAction(editAction);
      alertController.addAction(deleteAction);
      alertController.addAction(cancelAction);

      // This is how you can force change the color of the title text on the actions (buttons).
      alertController.view.tintColor = new Color("#000000").ios; // Color is a class in Nativescript, if we you want the Native IOS value, this is how you do it.

      // alertController.editButtonItem.tintColor = new Color("#000000").ios;

      // alertController = new Color("#000000").ios;

      // editAction.setValueForKey(new Color('black').ios, 'titleTextColor');



      const currentPage = Frame.topmost().currentPage;
      const viewController: UIViewController = currentPage.ios;
      viewController.presentModalViewControllerAnimated(alertController, true);
    }
  }





}
