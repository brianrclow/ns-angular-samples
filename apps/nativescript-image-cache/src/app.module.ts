// angular
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

// app
import { CoreModule } from './core/core.module';
import { SharedModule } from './features/shared/shared.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { ItemService } from './features/item/item.service';
import { ItemsComponent } from './features/item/items.component';
import { ItemDetailComponent } from './features/item/item-detail.component';
import { ImageCacheItModule } from '@triniwiz/nativescript-image-cache-it/angular';
import { ImageComponent } from './features/image/image.component';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
  imports: [CoreModule, SharedModule, AppRoutingModule, ImageCacheItModule],
  declarations: [AppComponent, ItemsComponent, ItemDetailComponent, ImageComponent],
  providers: [ItemService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
