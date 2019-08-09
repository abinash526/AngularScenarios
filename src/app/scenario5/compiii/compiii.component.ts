import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-compiii',
  templateUrl: './compiii.component.html',
  styleUrls: ['./compiii.component.css']
})
export class CompiiiComponent implements OnInit {

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
