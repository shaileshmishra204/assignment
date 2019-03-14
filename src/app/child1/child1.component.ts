
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})

export class Child1Component implements OnInit {

  @Input('data') data;
  @Output() passed = new EventEmitter<string>();
  constructor() {

  }
  ngOnInit() {
    console.log(this.data, 'look');
  }
  toPass(i) {
    this.passed.emit(i);
    console.log(this.passed);
  }

}
