import { Component } from '@angular/core';
import { Dialogs } from '@nativescript/core';

@Component({
  selector: 'ns-angular-samples-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  showLogin() {
    const loginOptions = {
      title: 'Login Form',
      message: 'Enter your credentials',
      okButtonText: 'Login',
      cancelButtonText: 'Cancel',
      neutralButtonText: 'Neutral',
      userNameHint: 'Enter your username',
      passwordHint: 'Enter your password',
      userName: 'john_doe',
      password: '123456'
    }

    Dialogs.login(loginOptions).then(loginResult => {
      console.log(loginResult.result)
    })
  }

}
