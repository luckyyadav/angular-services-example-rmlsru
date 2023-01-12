import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class MyServices2 {
  public stringSubject = new Subject();
  constructor() {}

  passValueSubject(data) {
    //passing the data as the next observable
    this.stringSubject.next('mbnbbb');
  }
}
