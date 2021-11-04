import { Component } from '@angular/core'
import { EventData, View } from '@nativescript/core';
import * as SocialShare from "@nativescript/social-share";
// import * as fs from '@nativescript/core/file-system'
import { ImageSource } from '@nativescript/core/image-source';


import { BaseComponent } from '@ns-angular-samples/xplat/core';

@Component({
  moduleId: module.id,
  selector: 'ns-angular-samples-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BaseComponent {


  // creates an image from a specific view on the screen
  getImage(view: View) {
    if (view.ios) {
      //ios logic
      UIGraphicsBeginImageContextWithOptions(view.ios.frame.size, false, 0);

      view.ios.drawViewHierarchyInRectAfterScreenUpdates(CGRectMake(0, 0, view.ios.frame.size.width,
        view.ios.frame.size.height), true);
      const imageFromCurrentImageContext = UIGraphicsGetImageFromCurrentImageContext();
      UIGraphicsEndImageContext();
      return ImageSource.fromDataSync(UIImagePNGRepresentation(imageFromCurrentImageContext));

    } else if (view.android) {
      // android logic

    }
    return undefined;
  }


  // opens the share sheet for sharing an image
  shareCard(args: EventData) {
    console.log("====================================");
    console.log("Share");

    const view = args.object as View;

    const targetView = view.page.getViewById('card') as View;

    const screenShot = this.getImage(targetView);

    // let image = ImageSource.fromFile("~/path/to/myImage.jpg");
    const image = screenShot;
    SocialShare.shareImage(image);
  }

  // TODO: Implement save feature
  // some logic to save the image to the device photo library
  saveCard(args: EventData) {
    console.log("====================================");
    console.log("Save");

    // const view = args.object as View;
    // const targetView = view.page.getViewById('score') as View;

    // // let documents = fs.knownFolders.ios.downloads();
    // // console.log("documents", documents);

    // // let path = fs.path.join(documents.path, "pic.png");
    // // console.log("path", path);

    // const screenShot = this.getImage(targetView);
    // // screenShot.saveToFile(path, "jpg");

    // // let path      = fs.path.join(fs.knownFolders.documents().path, "Test.png");    
    // // let src       = ImageSource.fromNativeSource(img);
    // // let saved     = src.saveToFile(path, "png");


    // // var knownPath = fs.knownFolders.currentApp();
    // // var folderPath = fs.path.join(knownPath.path, "CosmosDataBank");

    // // var folder = fs.Folder.fromPath(folderPath);
    // // var path = fs.path.join(folderPath, "Test.png");

    // // var saved = screenShot.saveToFile(path, "png");

    // // let documents = fs.knownFolders.documents();
    // // let path = fs.path.join(documents.path, "pic.png");
    // // ImageSource fromDataSync(screenShot)
    // //     .then(imageSource => {
    // //          imageSource.saveToFile(path, "png");
    // //      });

    // console.log("screenshot", screenShot);

  }

}
