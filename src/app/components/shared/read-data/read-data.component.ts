import { Component, OnInit, Input } from '@angular/core';
import { ReadComponent } from '../../read/read.component';

@Component({
  selector: 'app-read-data',
  templateUrl: './read-data.component.html',
  styleUrls: ['./read-data.component.scss']
})

export class ReadDataComponent implements OnInit {
  @Input() data:any = {};

  constructor() {
    console.log(this.data);
   }

  ngOnInit() {
    
  }

}
