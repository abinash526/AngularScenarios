import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

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
