import { Component, OnInit } from '@angular/core';
import { CineService } from 'src/app/services/cine.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  constructor(private cineService: CineService) { 
    this.cineService.read('actors').subscribe(data =>{
      console.log(data);
    });
  }

  ngOnInit() {
  }

}
