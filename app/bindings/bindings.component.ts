import {Component} from '@angular/core';
import {TestComponent} from './test/test.component';
@Component({
  selector: 'my-bindings',
  template:`
  <h3>[style.color]="inputElement.value === 'yes' ? 'red':'gray'" </h3>
  <h2>Hello <span [style.color]="inputElement.value === 'yes' ? 'red':'gray'">{{name}}</span></h2>
  <p>Try to write 'yes' inside input !!
    <span [class.is-awesome]="inputElement.value === 'yes'"> Is it awesome?</span>
  <input type="text" #inputElement (keyup)="0">
  <button [disabled]="inputElement.value !== 'yes'" >Only enabled if 'yes' was entered</button>
  <h2>Event Binding && Two Way Databinding</h2>
  <input [value]="name" #input2 (keyup)="onKeyup(input2.value) ">
  <p>{{values}}
  <br>
  <input [(ngModel)]="name">
  <section class="parent">
    <h2>this is the parent component</h2>
    <h4>Please enter your name</h4>
    <input [(ngModel)]="name2"> <p>{{name2}}</p>
    <section class="child">
      <test [Myname]="name2" (hobbiesChanged)="hobbies = $event"></test>
    </section>
    <p>My hobbies are: {{hobbies}}</p>
  </section>
  <p>Change your source here:
  <input #imageSource value="https://pbs.twimg.com/profile_images/674634336772206593/41b1p-6l.png" (keyup)="0">
  <img [src]="imageSource.value">
  </p>
`,
styleUrls:['app/bindings/bindings.css'],
directives:[TestComponent]
})
export class BindingsComponent{
  name="Mohamed Belaid";
  name2="";
  values="";
  hobbies = "";
  onKeyup(value: string){
    this.values += value + ' | ';
  }
}
