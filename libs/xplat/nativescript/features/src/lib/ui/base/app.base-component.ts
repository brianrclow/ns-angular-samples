import { Directive } from '@angular/core';

// libs
import { BaseComponent } from '@ns-angular-samples/xplat/core';
import { AppService } from '@ns-angular-samples/xplat/nativescript/core';

@Directive()
export abstract class AppBaseComponent extends BaseComponent {
  constructor(protected appService: AppService) {
    super();
  }
}
