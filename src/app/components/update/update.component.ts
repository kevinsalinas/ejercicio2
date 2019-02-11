import { Component, OnInit } from '@angular/core';
import { CineService } from 'src/app/services/cine.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  constructor(private cineService: CineService) { 
    this.cineService.update('-LY9lfmHOAl7sgSDSl0E', 'movies', {
      name: 'ro',
      age: 15   ,
      gender: 'male'
    }).then(data => {
      console.log('data: ' + data)
    }).catch(error => {
      console.log('error: ' + error)
    });
  }

  ngOnInit() {
  }

}
