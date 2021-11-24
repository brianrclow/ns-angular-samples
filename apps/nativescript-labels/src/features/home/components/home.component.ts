import { Component, ElementRef, ViewChild } from '@angular/core';
import { Label } from '@nativescript/core';

import { BaseComponent } from '@ns-angular-samples/xplat/core';

@Component({
  moduleId: module.id,
  selector: 'ns-angular-samples-home',
  templateUrl: './home.component.html',
})
export class HomeComponent extends BaseComponent {
  lines: number;
  @ViewChild("notesLabel", { static: true }) notesLabel: ElementRef<Label>;

  constructor() {
    super();
    this.lines = 3;
  }

  labelLoaded() {
    this.notesLabel.nativeElement.ios.numberOfLines = this.lines;
    // this.notesLabel.nativeElement,android.text. setMaxLines(2);
  }
}
