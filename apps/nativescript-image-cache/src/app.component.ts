import { Component } from '@angular/core';
import { AppService } from '@ns-angular-samples/xplat/nativescript/core';
import { AppBaseComponent } from '@ns-angular-samples/xplat/nativescript/features';

@Component({
  selector: 'ns-angular-samples-root',
  template: `
    <GridLayout>
      <page-router-outlet></page-router-outlet>
    </GridLayout>
  `,
})
export class AppComponent extends AppBaseComponent {
  constructor(appService: AppService) {
    super(appService);
  }
}
