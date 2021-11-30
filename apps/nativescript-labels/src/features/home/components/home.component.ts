import { Component, ElementRef, ViewChild } from '@angular/core';
import { isIOS, Label } from '@nativescript/core';

import { BaseComponent } from '@ns-angular-samples/xplat/core';

@Component({
  moduleId: module.id,
  selector: 'ns-angular-samples-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BaseComponent {
  lines: number;
  @ViewChild("notesLabel", { static: true }) notesLabel: ElementRef<Label>;
  // @ViewChild("dynamicLabel", { static: true }) dynamicLabel: ElementRef<Label>;

  constructor() {
    super();
    this.lines = 2;
  }

  dynamicLabelLoaded() {

    // this.dynamicLabel.nativeElement.ios.font = this.dynamicLabel.nativeElement.ios.preferredFont('body');
    // this.dynamicLabel.nativeElement.ios.adjustsFontForContentSizeCategory = true;

    // From documentation:
    // label.ios.font = .preferredFont(forTextStyle: .body)
    // label.adjustsFontForContentSizeCategory = true
  }

  // TODO: Set Android text max lines
  labelLoaded() {
    if (isIOS) {
      this.notesLabel.nativeElement.ios.numberOfLines = this.lines;

      // Documentation on lineBreakMode https://developer.apple.com/documentation/uikit/nslinebreakmode
      // this.notesLabel.nativeElement.ios.lineBreakMode = 1;
    } else {
      // this.notesLabel.nativeElement.android.text. setMaxLines(2);
    }

  }
}
