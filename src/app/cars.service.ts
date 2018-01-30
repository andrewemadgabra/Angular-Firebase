import { Injectable } from '@angular/core';
import { AngularFireDatabase , AngularFireList } from 'angularfire2/database';
import { Cars } from './cars.model';
import * as firebases from 'firebase/app';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class CarsService {
  cars: Observable<any[]>;
  selectedcar: Cars = new Cars();
  constructor( private db: AngularFireDatabase ) { }
  // give data from database  of firebase

  getcarslist() {
    return this.db.list('/Cars/').valueChanges();
  }


}
