import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
// import { HttpModule } from '@angular/http';
import { CineService } from "../../services/cine.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {



  constructor(public cs:CineService) {
    this.cs.create('actors',{
      name: 'kevin',
      age: 20,
      gender: 'male',
      nationality: 'canadian'
    });
   }

  ngOnInit() {
  }





}
