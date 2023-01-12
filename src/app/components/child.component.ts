import { Component } from '@angular/core';
import { MyServices2 } from '../services/myService2';

@Component({
  selector: 'my-child',
  templateUrl: './child.component.html',
})
export class ChildComponent {
  name = 'Angular';
  myTextVal;
  constructor(private msecondSer: MyServices2) {}

  sendTextValue() {
    this.msecondSer.passValueSubject(this.myTextVal);
  }
}
