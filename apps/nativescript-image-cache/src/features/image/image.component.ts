import { Component, Input } from '@angular/core';

import { BaseComponent } from '@ns-angular-samples/xplat/core';
import { ImageCacheIt } from '@triniwiz/nativescript-image-cache-it';

@Component({
  moduleId: module.id,
  selector: 'ns-angular-samples-image',
  templateUrl: './image.component.html'
})
export class ImageComponent extends BaseComponent {
  /** Accepts string or binary. */
  @Input() src: any;
  @Input() styling = '';
  @Input() width = 0;
  @Input() height = 0;
  @Input() stretch = 'aspectFill';

  /** Broken link? Example: res://error_holder */
  @Input() errorHolder = '';

  /** Loading.. Example: res://place_holder */
  @Input() placeHolder = '';

  /** ? */
  @Input() fallback = '';
}
