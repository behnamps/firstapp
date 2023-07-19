import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstapp';
  myp = 'ptag'
  myForm = 'myFormCss'

  FullName = 'behnam';
  Email ='behnam@gmail.com ';
  Phone = '091000022';

  Toggle : boolean = false;


  ShowMessage() : void {
    this.Toggle = !this.Toggle;
  }

  ValidateForm(formValue : string) : void {
    console.log(formValue);
  }
}
