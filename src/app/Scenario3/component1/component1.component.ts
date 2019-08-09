import { Component, OnInit } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor() { }
  public name;  
  public message1;

 public assign(value)
  {
    this.message1=value;

  }
  ngOnInit() {
  }
  onClick(value)
  {
     this.name=value;
  }

}
