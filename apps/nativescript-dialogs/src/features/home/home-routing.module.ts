import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { ActionComponent } from './dialogs/action/action.component';
import { AlertComponent } from './dialogs/alert/alert.component';
import { ConfirmComponent } from './dialogs/confirm/confirm.component';
import { LoginComponent } from './dialogs/login/login.component';
import { PromptComponent } from './dialogs/prompt/prompt.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "alert", component: AlertComponent },
  { path: "action", component: ActionComponent },
  { path: "confirm", component: ConfirmComponent },
  { path: "login", component: LoginComponent },
  { path: "prompt", component: PromptComponent },
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule { }
