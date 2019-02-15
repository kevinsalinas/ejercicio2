import { Component, OnInit } from '@angular/core';
import { CineService } from 'src/app/services/cine.service';
import { resolve } from 'url';
import { reject } from 'q';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
})
export class ActorsComponent implements OnInit {

  promise: Promise<any[]> ;
  dataElements: any = [];
  subject = new Subject();

  constructor(private cineService: CineService) {
    this.cineService.read('actors').subscribe( 
      data => { this.subject.next(data) } ,
      error => { console.log('error en el read') }
      
    );
  }

  ngOnInit() {
    this.subject.subscribe(data => {
      // console.log('mi data',data);
      this.dataElements = data;
    })    
  }

}
