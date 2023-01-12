import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ChildComponent } from './components/child.component';
import { MyServices } from './services/myServices';
import { MyServices2 } from './services/myService2';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ChildComponent],
  bootstrap: [AppComponent],
  providers: [MyServices, MyServices2],
})
export class AppModule {}
