import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'puzzle',
  template:`
  <section class="setup">
   <h2>Game Setup</h2>
   Enter your name please:
   <input type="text" #name (keyup)="0">
  </section>
  <section
  [style.display]="name.value==='' ? 'none':'block' "
  [ngClass]="{
    puzzle:true,
    solved: switch1.value == switch1Num &&
            switch2.value == switch2Num &&
            switch3.value == switch3Num &&
            switch4.value == switch4Num
  }"
  >
   <h2>The puzzle | {{ switch1.value == switch1Num &&
           switch2.value == switch2Num &&
           switch3.value == switch3Num &&
           switch4.value == switch4Num ? 'SOLVED':'NOT SOLVED' }}</h2>
   <p>Welcome <span class="name">{{name.value}}</span> </p>
   <br>
   Switch1: <input type="text" #switch1 (keyup)="0"><br>
   Switch2: <input type="text" #switch2 (keyup)="0"><br>
   Switch3: <input type="text" #switch3 (keyup)="0"><br>
   Switch4: <input type="text" #switch4 (keyup)="0"><br>
  </section>
  <h2 [hidden]="switch1.value != switch1Num ||
          switch2.value != switch2Num ||
          switch3.value != switch3Num ||
          switch4.value != switch4Num">
  Congratulations {{name.value}}, you did it!</h2>
`,
styleUrls: ['app/puzzle/puzzle.component.css']
})
export class PuzzleComponent implements OnInit{
  switch1Num: number;
  switch2Num: number;
  switch3Num: number;
  switch4Num: number;

  ngOnInit(){
    this.switch1Num = Math.round(Math.random());
    this.switch2Num = Math.round(Math.random());
    this.switch3Num = Math.round(Math.random());
    this.switch4Num = Math.round(Math.random());
    console.log(this.switch1Num, this.switch2Num,this.switch3Num, this.switch4Num)
  }




}
