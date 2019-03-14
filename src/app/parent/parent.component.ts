import { element } from 'protractor';
import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent {
  parentData: any; child2Data: any;
  constructor(public service: AppService) {
    const dataToRender = this.service.data().then(data => {
      this.parentData = data;

    });
  }
  passedData(event) {
    console.log(event, 'data passed to parrent');
    this.child2Data = event;

  }
}

