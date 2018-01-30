import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarsService } from './cars.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabaseModule , AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CarsService]
})
export class AppComponent {

 constructor(public af: AngularFireAuth , private router: Router) {
  /*this.af.authState.subscribe(
    (auth) => {
      if (auth != null) {
        this.user = af.authState;
      // this.authenticated = true;
    if(this.authenticated = false){
      this.router.navigate(['login']);
    }
 }
    });*/
    }
}
