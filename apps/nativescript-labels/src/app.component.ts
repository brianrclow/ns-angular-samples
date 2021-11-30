import { Component, OnInit } from '@angular/core';
import { Application } from '@nativescript/core';
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
export class AppComponent extends AppBaseComponent implements OnInit {
  constructor(appService: AppService) {
    super(appService);
  }

  ngOnInit(): void {
    Application.on(Application.fontScaleChangedEvent, (args) => {
      console.log('fontScaleChangedEvent newValue', args.newValue);
      Application.addCss('.ns - ios { --font - scale: ${ normalizedValue } }');

    });
  }

}
