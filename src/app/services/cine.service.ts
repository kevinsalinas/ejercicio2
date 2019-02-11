import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
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
      return this.db.list(cat + key).valueChanges();
    } else {
      return this.db.list(cat).valueChanges();
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



