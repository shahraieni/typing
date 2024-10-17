import { Component } from '@angular/core';

import { faker } from '@faker-js/faker'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText :string = faker.lorem.sentences(1);
  inputText :string ='';

  onChangeInput(text:string){
     this.inputText = text 
  }
  comparm(LetterRandom:string , LetterEnter :string) :string{
   if(!LetterEnter)return 'pending'
    return LetterRandom === LetterEnter?"succss" :"error"
  }
}
