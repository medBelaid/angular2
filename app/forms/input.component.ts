import {Component, EventEmitter} from '@angular/core';
@Component({
  selector: 'my-input',
  template:`
  <h1>Your Details plz</h1>
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
  <button [disabled]="!isValid" (click)="onSubmit()">Submit</button>

  `,
  inputs: ['myself'],
  outputs: ['submitted']
})
export class InputComponent{
  myself = {name:'', age:''};
  isFilled = false;
  isValid = false;
  submitted = new EventEmitter<{name: string, age:string}>();
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
  onSubmit(){
    this.submitted.emit(this.myself);
  }
}
