import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CineService } from 'src/app/services/cine.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  dataElements: any = [];
  subject = new Subject();
  pathRef: string = '';

  constructor(private activated: ActivatedRoute, private cineService: CineService) {
    this.activated.parent.url.subscribe(p => {
      this.pathRef = p[0].path;
    });

    this.cineService.read('categories').subscribe( 
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
