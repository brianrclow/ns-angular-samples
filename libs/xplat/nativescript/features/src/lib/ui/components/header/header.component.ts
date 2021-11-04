import { Component } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

import { HeaderBaseComponent } from '@ns-angular-samples/xplat/features';

@Component({
  moduleId: module.id,
  selector: 'ns-angular-samples-header',
  templateUrl: 'header.component.html',
})
export class HeaderComponent extends HeaderBaseComponent {
  constructor(private router: RouterExtensions) {
    super();
  }
}
