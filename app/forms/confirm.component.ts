import {Component, EventEmitter} from '@angular/core';
@Component({
  selector: 'my-confirm',
  template:`
    <h1>Your submitted the following details, Is this correct?</h1>
    <p>your name is <span class="highlight">{{myself.name}}</span>
    and you are <span class="highlight">{{myself.age}}</span> years old.
    Plz click confirm if you have made any changes to this information.</p>
    <div>
      <label for="name">Your name</label>
      <input id="name" [(ngModel)]="myself.name" (keyup)="checkInputs()">
    </div>
    <div>
      <label for="age">Your age</label>
      <input id="age" [(ngModel)]="myself.age" (keyup)="checkInputs()">
    </div>
    <br>
    <div>Filled out: {{isFilled ? 'Yes' : 'Non'}}</div>
    <div>Valid: {{isValid ? 'Yes' : 'Non'}}</div>
    <button [disabled]="!isValid" (click)="onConfirm()">Submit</button>
    `,
    inputs: ['myself'],
    outputs: ['confirmed']
})
export class ConfirmComponent{
  myself = {name:'', age:''};
  isFilled = false;
  isValid = false;
  confirmed = new EventEmitter<{name: string, age:string}>();
  checkInputs(){
    if(this.myself.name != '' && this.myself.age != ''){
      this.isFilled = true;
    }else{
      this.isFilled = false;
    }
    if(this.myself.name != '' && /^\d+$/.test(this.myself.age)){
      this.isValid = true;
    }else{
      this.isValid = false;
    }
  }
  onConfirm(){
    this.confirmed.emit(this.myself);
  }
}
