import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Actor } from '../interfaces/actor';


@Injectable({
  providedIn: 'root'
})
export class CineService {

  private actors: Observable<any[]>;
  private movies: Observable<any[]>;
  private categories: Observable<any[]>;

  constructor( public db: AngularFireDatabase) {
     
  }

  read(cat: string, key?: string): Observable<{}[]> {
    if (key) {
      // return this.db.list(cat + key).valueChanges();
      return this.db.list(cat + key).snapshotChanges().pipe(
        map( items => {
          return items.map( a => {
            const data = a.payload.val();
            const key = a.payload.key;
            return { key, data};
          })
        })
      );
    } else {
      return this.db.list(cat).snapshotChanges().pipe(
        map( items => {
          return items.map( a => {
            const data = a.payload.val();
            const key = a.payload.key;
            return { key, data};
          })
        })
      );
    }
  }

  create(cat: string, param: Object): Promise<any> {
    return this.db.list(cat).push(param);
  }

  update(key: string, cat: string, param: Object): Promise<any> {
    return this.db.list(cat).update(key, param);
  }

  delete(key: string, cat: string): Promise<any> {
    return this.db.list(cat).remove(key);
  }

}



