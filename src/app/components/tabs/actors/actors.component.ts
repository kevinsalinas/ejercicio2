import { Component, OnInit } from '@angular/core';
import { CineService } from 'src/app/services/cine.service';
import { resolve } from 'url';
import { reject } from 'q';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
})
export class ActorsComponent implements OnInit {

  dataElements: any = [];
  subject = new Subject();
  pathRef: string = '';
  formType = 'actors';

  constructor(private cineService: CineService, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.parent.url.subscribe(p => {
      this.pathRef = p[0].path;
      console.log(this.pathRef);
    });

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
