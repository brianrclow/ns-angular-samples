import { Component, OnInit } from '@angular/core';
import { Application } from '@nativescript/core';
import { AppService } from '@ns-angular-samples/xplat/nativescript/core';
import { AppBaseComponent } from '@ns-angular-samples/xplat/nativescript/features';

@Component({
  selector: 'ns-angular-samples-root',
  template: `
    <GridLayout>
      <router-outlet></router-outlet>
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
      Application.addCss(`.ns-ios { --font-scale: ${args.newValue} }`); // note the backtick for template strings
    });


    // using a normalized value for setting boundaries to the font sizes
    // Application.on(Application.fontScaleChangedEvent, args => {
    //   console.log('fontScaleChangedEvent newValue', args.newValue);
    //   const normalizedValue = Math.max(0.5, Math.min(args.newValue, 2)); // limit scale factor to avoid too small or too large fonts
    //   Application.addCss('.ns-ios {--font-scale: ' + normalizedValue + '}');
    // });

  }
}
