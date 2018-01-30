import { Component, OnInit } from '@angular/core';
import { Router , Params  , ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { HttpModule } from '@angular/http';
import { CarsService } from '../cars.service';
import { Cars } from '../cars.model';
import { element } from 'protractor';
import * as firebase from 'firebase/app';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';



@Component({
  selector: 'app-cardetails',
  templateUrl: './cardetails.component.html',
  styleUrls: ['./cardetails.component.css']
})
export class CardetailsComponent implements OnInit {
  cars: Observable<any[]>;
  // carslist: FirebaseListObservable<any>;
  user: Observable<firebase.User>;
  authenticated = false;

  carbrand="";
  carcountry="";
  caryear="";
  carimage="";

  constructor(public af: AngularFireAuth, private router: Router , private  db: AngularFireDatabase ,private route: ActivatedRoute) {
  }
  dosomething(car:any){
    this.af.authState.subscribe(
      (auth) => {
        if (auth != null) {
          this.user = this.af.authState;
          this.authenticated = true;

          firebase.database().ref().child(car+'/Brand').on('value', (snapshot) => {
            this.carbrand= snapshot.val();
            console.log(this.carbrand);
          },  (error) => console.log('Error: ' + error.code));
          firebase.database().ref().child(car+'/Country').on('value', (snapshot) => {
           
            this.carcountry = snapshot.val();
            console.log(this.carcountry);
          },  (error) => console.log('Error: ' + error.code));
          firebase.database().ref().child(car+'/ImageURL').on('value', (snapshot) => {
           
            this.carimage = snapshot.val();
            console.log(this.carimage);
          },  (error) => console.log('Error: ' + error.code));
          firebase.database().ref().child(car+'/year').on('value', (snapshot) => {
           
            this.caryear = snapshot.val();
            console.log(this.caryear);
          },  (error) => console.log('Error: ' + error.code));

        }
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
 }
 ngOnInit() {
  this.route.queryParams.subscribe(params => {
      // Defaults to 0 if no query param provided.
     this.dosomething(params['car']);
    });
}

}
