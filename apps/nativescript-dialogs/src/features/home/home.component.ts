import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'ns-angular-samples-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private _routerExtension: RouterExtensions, private _route: ActivatedRoute) {

  }

  // navigates to new view with slide transition
  navigateTo(path: string) {
    this._routerExtension.navigate([path], {
      clearHistory: false,
      relativeTo: this._route,
      animated: true,
      transition: {
        name: 'slide',
        duration: 350,
        curve: 'ease',
      },
    });
    console.log('----- DONE -----');
    console.log('Navigated to ', path);
  }

}
