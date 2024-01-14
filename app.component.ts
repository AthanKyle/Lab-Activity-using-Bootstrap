import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true
})
export class AppComponent {
  title = 'this string is interpalated';
  clientName = 'Kyle';
  appliedCSS = 'green';
  notAppliedCSS = false;
  myColor = 'red';

//Event Binding
  clickCount=0;
  clickMe() {
  this.clickCount++;
  }
}