import { Component, OnInit } from '@angular/core';
import { CineService } from 'src/app/services/cine.service';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  id;

  constructor(private cineService: CineService, private ar: ActivatedRoute) { 
  
    this.ar.params.subscribe( (p:Params) => {
      console.log(p);
      
    })
  }

  ngOnInit() {
  }

}
