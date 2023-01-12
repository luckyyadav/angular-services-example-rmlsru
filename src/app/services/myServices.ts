import { Injectable } from '@angular/core';
import { MyServices2 } from './myService2';

@Injectable()
export class MyServices {
  constructor(private ms2: MyServices2) {}

  sayHello() {
    //this.emitData();
    //alert("Hello");
    let title = 'some tesr from service 1';
    console.log('Say Hello');

    return title;
  }
  emitData(data) {
    console.log('testtttttttttttttttt service1');
    this.ms2.passValueSubject(data);
  }
}
