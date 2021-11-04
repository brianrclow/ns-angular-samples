import { NgModule, Optional, SkipSelf } from '@angular/core';

// nativescript
import {
  NativeScriptModule,
  NativeScriptHttpClientModule,
} from '@nativescript/angular';
import { Device } from '@nativescript/core';
import { TNSFontIconModule, USE_STORE } from 'nativescript-ngx-fonticon';
import { fontAwesomeIcons } from '@ns-angular-samples/xplat/nativescript/utils';

// libs
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {
  CoreModule,
  PlatformLanguageToken,
  PlatformWindowToken,
} from '@ns-angular-samples/xplat/core';
import { throwIfAlreadyLoaded } from '@ns-angular-samples/xplat/utils';

// app
import { MobileWindowService } from './services/mobile-window.service';
import { MobileTranslateLoader } from './services/mobile-translate.loader';

// factories
export function platformLangFactory() {
  return Device.language;
}

export function createTranslateLoader() {
  return new MobileTranslateLoader('/assets/i18n/');
}

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptHttpClientModule,
    TNSFontIconModule.forRoot({}),
    CoreModule.forRoot([
      {
        provide: PlatformLanguageToken,
        useFactory: platformLangFactory,
      },
      {
        provide: PlatformWindowToken,
        useClass: MobileWindowService,
      },
    ]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
      },
    }),
  ],
  providers: [
    {
      // inline icons to avoid extra file handling on app boot
      provide: USE_STORE,
      useValue: {
        fa: fontAwesomeIcons,
      },
    },
  ],
})
export class NsAngularSamplesCoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: NsAngularSamplesCoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'NsAngularSamplesCoreModule');
  }
}
