import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CineService } from 'src/app/services/cine.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  dataElements: any = [];
  subject = new Subject();
  pathRef: string = '';

  constructor(private activated: ActivatedRoute, private cineService: CineService) {
    this.activated.parent.url.subscribe(p => {
      this.pathRef = p[0].path;
    });

    this.cineService.read('movies').subscribe( 
      data => { this.subject.next(data) } ,
      error => { console.log('error en el read') }
    );
   }


  ngOnInit() {
    this.subject.subscribe(data => {
      this.dataElements = data;
    });
  }

}
