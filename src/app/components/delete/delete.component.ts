import { Component, OnInit } from '@angular/core';
import { CineService } from 'src/app/services/cine.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  constructor(private cineService: CineService) {
     
  }

  ngOnInit() {
  }

}
