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
  maxLineWrap: number;
  @ViewChild("notesLabel", { static: true }) notesLabel: ElementRef<Label>;

  constructor() {
    super();
    this.maxLineWrap = 2;
  }

  /**
   * Sets the maximum number of lines the text will wrap for the Label
   */
  setMaxLineWrap() {
    if (isIOS) {
      this.notesLabel.nativeElement.ios.numberOfLines = this.maxLineWrap;
      this.notesLabel.nativeElement.ios.adjustsFontSizeToFitWidth = false;
      this.notesLabel.nativeElement.ios.lineBreakMode = NSLineBreakMode.ByTruncatingTail;
    } else {
      this.notesLabel.nativeElement.android.setSingleLine(false);
      this.notesLabel.nativeElement.android.setMaxLines(this.maxLineWrap);
      this.notesLabel.nativeElement.android.setEllipsize(android.text.TextUtils.TruncateAt.END);
    }
  }
}
