import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-componentii',
  templateUrl: './componentii.component.html',
  styleUrls: ['./componentii.component.css']
})
export class ComponentiiComponent implements OnInit {

  constructor() { }
  @Output() public childEvent=new EventEmitter();
 // @Output() public childEvent=new EventEmitter();
  sendEventToParent(value)
  {
    this.childEvent.emit(value);
  }

  ngOnInit() {
  }

}
