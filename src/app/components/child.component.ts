import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { MyServices2 } from '../services/myService2';

@Component({
  selector: 'my-child',
  templateUrl: './child.component.html',
})
export class ChildComponent implements OnInit {
  name = 'Angular';
  myTextVal;
  constructor(private msecondSer: MyServices2) {}

  /* sendTextValue() {
    this.msecondSer.passValueSubject(this.myTextVal);
  } */

  ngOnInit() {
    this.msecondSer.stringSubject.subscribe((res) => {
     this.myTextVal=res;
    });
  }
}
