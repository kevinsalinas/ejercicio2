import { Component, OnInit } from '@angular/core';
import { CineService } from 'src/app/services/cine.service';
import { resolve } from 'url';
import { reject } from 'q';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
})
export class ActorsComponent implements OnInit {

  promise: Promise<any[]> ;
  dataElements: any [] = [];

  constructor(private cineService: CineService) {
    

    this.cineService.read('actors').subscribe( data => {
      
    });
    console.log("data elements: " + this.dataElements);
    
    
   }

  ngOnInit() {
  }

}
