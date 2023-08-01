import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  persons: any[] = [
    {name : 'behnam', age : '35' , game: 'cs'},
    {name : 'Ali Reza', age : '48' , game: 'minecraft'},
    {name : 'Mohammad Reza', age : '58' , game: 'call of duty'},
    {name : 'Mysam', age : '39' , game: 'rainbow'},
  ];

}
