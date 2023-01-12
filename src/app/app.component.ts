import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { MyServices } from './services/myServices';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular';
  fromFirstComponentVal;
  serviceText;
  constructor(private myServices: MyServices) {
    this.serviceText = this.myServices.sayHello();
  }

  ngOnInit() {}

  sendTextValue() {
    this.myServices.emitData(this.fromFirstComponentVal);
  }
}
