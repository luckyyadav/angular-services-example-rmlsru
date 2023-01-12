import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class MyServices2 {
  public stringSubject = new Subject();
  constructor() {
    console.log('service2');
  }

  passValueSubject(data) {
    //passing the data as the next observable
    this.stringSubject.next(data);
    return this.stringSubject;
  }
}
