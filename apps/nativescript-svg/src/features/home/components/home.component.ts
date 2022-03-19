import { Component } from '@angular/core';

import { BaseComponent } from '@ns-angular-samples/xplat/core';

import { registerElement } from '@nativescript/angular';

import { Svg } from '@nativescript/canvas/SVG';
registerElement('SVG', () => Svg);

@Component({
  moduleId: module.id,
  selector: 'ns-angular-samples-home',
  templateUrl: './home.component.html',
})
export class HomeComponent extends BaseComponent {
  svg_image =
    'https://media.streetparking.com/media/610c6e6f02229563e0b6f0e8/610c6e6f02229563e0b6f0e8.svg';
}
