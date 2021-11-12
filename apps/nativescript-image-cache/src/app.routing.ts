// angular
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

// nativescript
import { NativeScriptRouterModule } from '@nativescript/angular';

// app
import { SharedModule } from './features/shared/shared.module';

import { ItemsComponent } from './features/item/items.component';
import { ItemDetailComponent } from './features/item/item-detail.component';

const routes: Routes = [
  { path: "", redirectTo: "/items", pathMatch: "full" },
  { path: "items", component: ItemsComponent },
  { path: "item/:id", component: ItemDetailComponent },
];

@NgModule({
  imports: [SharedModule, NativeScriptRouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
