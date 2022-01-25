import { Component } from '@angular/core';
import { Dialogs, Enums, inputType } from '@nativescript/core';

@Component({
  selector: 'ns-angular-samples-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.scss']
})
export class PromptComponent {

  showPrompt() {
    const promptOptions = {
      title: 'Hey There',
      defaultText: ' Enter your mood ',
      message: "How you doin'",
      okButtonText: 'OK',
      cancelButtonText: 'Cancel',
      neutralButtonText: 'Neutral',
      cancelable: true,
      inputType: inputType.text, // email, number, text, password, or email
      capitalizationType: Enums.AutocapitalizationType.sentences // all. none, sentences or words
    }

    Dialogs.prompt(promptOptions).then(result => {
      console.log('Hello, ' + result.text)
    })
  }

}
