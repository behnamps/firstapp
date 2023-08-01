import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  @Input() 
  parentData: string = '';
  
  @Output()
  public childData = new EventEmitter();
}
