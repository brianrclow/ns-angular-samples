import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { ConfirmComponent } from './dialogs/confirm/confirm.component';
import { LoginComponent } from './dialogs/login/login.component';
import { PromptComponent } from './dialogs/prompt/prompt.component';
import { AlertComponent } from './dialogs/alert/alert.component';
import { ActionComponent } from './dialogs/action/action.component';


@NgModule({
  declarations: [
    HomeComponent,
    AlertComponent,
    ActionComponent,
    ConfirmComponent,
    LoginComponent,
    PromptComponent
  ],
  imports: [
    CommonModule,
    NativeScriptCommonModule,
    HomeRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule { }
