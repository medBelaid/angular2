import {Component, EventEmitter} from '@angular/core';

@Component({
  selector: 'test',
  templateUrl:'app/bindings/test/test.component.html',
  inputs: ['Myname'],
  outputs: ['hobbiesChanged']
})
export class TestComponent{
  Myname = '';
  hobbiesChanged = new EventEmitter<string>();
  onHobbiesChanged(hobbies: string){
    this.hobbiesChanged.emit(hobbies);
  }
}
