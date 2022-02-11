import {
  platformNativeScript,
  runNativeScriptAngularApp,
} from '@nativescript/angular';
import { enableProdMode } from '@angular/core';
import { environment } from '@ns-angular-samples/xplat/core';
import { AppModule } from './app.module';

if (environment.production) {
  enableProdMode();
}

runNativeScriptAngularApp({
  appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule),
});
