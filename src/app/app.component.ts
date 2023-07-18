import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstapp';
  myp = 'ptag'

  FullName = 'behnam';
  Email ='behnam@gmail.com ';
  Phone = '091000022';

  Toggle : boolean = false;


  ShowMessage() : void {
    this.Toggle = !this.Toggle;
  }
}
