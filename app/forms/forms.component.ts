import { Component } from '@angular/core';
import { InputComponent } from './input.component';
import { ConfirmComponent } from './confirm.component';

@Component({
selector: 'my-form',
template: `
<div class="container">
  <my-input (submitted)="onSubmit($event)" [myself]="confirmedMyself"></my-input>
</div>
<div class="container">
  <my-confirm (confirmed)="onConfirm($event)" [myself]="myself"></my-confirm>
</div>
`,
directives: [InputComponent, ConfirmComponent],
styleUrls: ['app/forms/forms.component.css']
})
export class FormsComponent{
  myself = {name:'', age:''};
  confirmedMyself={name:'',age:''};
  onSubmit(myself:{name: string, age: string}){
    this.myself = {name: myself.name, age: myself.age};
  }
  onConfirm(myself:{name: string, age: string}){
    this.confirmedMyself = {name: myself.name, age: myself.age};
  }
}
