import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-compii',
  templateUrl: './compii.component.html',
  styleUrls: ['./compii.component.css']
})
export class CompiiComponent implements OnInit {
  public message1;

  constructor() { }
  @Output() public childEvent=new EventEmitter();

  public forward(value)
  {
    //document.write(value);
    this.message1=value.toString();
    this.childEvent.emit(this.message1);
 
  }

  ngOnInit() {
  }

}
