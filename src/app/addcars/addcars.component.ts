import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { importType } from '@angular/compiler/src/output/output_ast';
import { Observable } from 'rxjs/Observable';
import { CarsService } from '../cars.service';
import { NgForm } from '@angular/forms';
import { Cars } from '../cars.model';
import { getHashes } from 'crypto';

@Component({
  selector: 'app-addcars',
  templateUrl: './addcars.component.html',
  styleUrls: ['./addcars.component.css']
})
export class AddcarsComponent implements OnInit {
  Country = '';
  Brand = '' ;
  year = '';
  ImageURL = '';
  user: Observable<firebase.User>;
  authenticated = false;
  constructor(public af: AngularFireAuth , private router: Router , private carsservice: CarsService, private db: AngularFireDatabase) {
    this.af.authState.subscribe(
      (auth) => {
        if (auth != null) {
          this.user = af.authState;
          this.authenticated = true;
        }
      });
    }
    carspostdata( Brand, Country, year, ImageURL) {
      firebase.database().ref('/Cars/').push({ Brand : Brand, Country: Country , year: year, ImageURL: ImageURL});
      this.router.navigate(['/homepage']);
    }

    logoutgoogle() {
      console.log('logout');
     this.af.auth.signOut()
     .then((result) => {
       this.router.navigate(['/login']).then(function() {
         window.location.reload();
         this.authenticated = false;
       });
       console.log('You were logged out successfully!');
     }).catch((error) => {
       this.authenticated = true;
       console.log('Error signing out: ', error);
     });
   }

  ngOnInit() {
  }

}
