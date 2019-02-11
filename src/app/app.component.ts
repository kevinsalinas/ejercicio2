import { Component } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyecto2';
  items: Observable<any[]>;
  constructor(db: AngularFireDatabase) {
    db.list('items').valueChanges().subscribe( data => {
      console.log("data: ", data);
      
    });   
  }
}
