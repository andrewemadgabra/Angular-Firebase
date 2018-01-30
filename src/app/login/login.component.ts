import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Router } from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabaseModule , AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { HomepageComponent } from '../homepage/homepage.component';
import { AddcarsComponent } from '../addcars/addcars.component';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Cars} from '../cars.model';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    email = '';
    password = '';
    userId: string;
  user: Observable<firebase.User>;
  authenticated = false;
  constructor(public af: AngularFireAuth, private router: Router) {
    this.af.authState.subscribe(
      (auth) => {
        if (auth != null) {
          this.user = af.authState;
          // this.authenticated = true;
          this.authenticated = false;
        }
      });
}
/*
logingoogle() {
    this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then((result) => {
      if (this.authenticated = true) {
        this.router.navigate(['/addcars']).then(function() {
          console.log('Signed in successfully!');
      });
      }
    }).catch((error) => {
      this.authenticated = false;
      console.log('Error signing in: ', error);
    });
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
  }*/
   loginemail( email , password) {
    this.af.auth.signInWithEmailAndPassword(email, password)
    .then((result) => {
      if (this.authenticated = true) {
         this.router.navigate(['/homepage']);
      }
    }).catch((error) => {
      this.authenticated = false;
      console.log('Error signing in: ', error); // page not found account
    });
  }


  ngOnInit() {  }

}
