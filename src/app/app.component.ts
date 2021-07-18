import { Component } from '@angular/core';
import {interval} from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title= "AngularTask"
  result = '';
  letters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  subscription: any


  reverseString(str: string) {
    let splitString = str.split("")
    let reverseArray = splitString.reverse()
    let joinArray = reverseArray.join("")
    return joinArray
  }


  makeWord() {
    this.result = '';
    let lettersLength = this.letters.length;
    for (let i = 0; i < 5; i++) {
      this.result += this.letters[Math.floor(Math.random() * lettersLength)];
    }
    (document.querySelector("#col") as HTMLElement).style.color = 'black'
    if (this.result === this.result.split("").reverse().join("") ) {
      (document.querySelector("#col") as HTMLElement).style.color = 'red'
    }
    if (Number.isInteger(parseInt(this.result, 10)) && parseInt(this.result, 10).toString().length == this.result.length) {
      (document.querySelector("#col") as HTMLElement).style.color = 'blue'
    }
    if (this.result.indexOf("0") != -1) {
      this.result = ""
    }
    return this.result;
  };


  stop() {

    this.subscription.unsubscribe()
  }
  sub(){
      this.subscription = interval(3000)
        .subscribe(
          val => this.makeWord()
        )
  }

}
