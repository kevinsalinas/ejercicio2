import { Component, OnInit, Input } from '@angular/core';
import { ReadComponent } from '../../read/read.component';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-read-data',
  templateUrl: './read-data.component.html',
  styleUrls: ['./read-data.component.scss']
})

export class ReadDataComponent implements OnInit {
  @Input() element:Object = {};
  obj:Object = {};

  constructor() {
    console.log("esta es la data ", this.element);
    this.element = this.element;
   }

  ngOnInit() {
    
  }

}
