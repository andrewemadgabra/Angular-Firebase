import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
import {MatTableDataSource} from '@angular/material';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [CarsService]
})
export class HomepageComponent implements OnInit {

  cars: Observable<any[]>;
  user: Observable<firebase.User>;
  car: any[];
  authenticated = false;
  displayedColumns = ['Brand', 'Country' , 'year' , 'Delete'];
  dataSource = new MatTableDataSource<any>([]);

  constructor(public af: AngularFireAuth, private router: Router , private  db: AngularFireDatabase, private carsservice: CarsService) {
    
        if (this.authenticated = true) {
          this.db.list('/Cars/').valueChanges().subscribe  (data=>{
           this.dataSource = new MatTableDataSource(data);
           console.log(data);
          }); 
          
    }
    
  }


  cardetails(index) {
    firebase.database().ref().child('/Cars/').once('value', (snapshot) => {
      let carlist = snapshot.val();
      console.log(carlist);
       let currenti = 0;
       for (let key in carlist) {
         if (currenti == index) {
           console.log(`Cars/${key}`);
           let keydetails = (`Cars/${key}`);
           console.log(keydetails);
           this.router.navigate([`cardetails/`], {queryParams:{car: keydetails}});
           break;
         }
         currenti++;
       }
    },  (error) => console.log('Error: ' + error.code));
  }



  // delete pass id
  deletecar(index) {
    firebase.database().ref().child('/Cars/').once('value', (snapshot) => {
     
     let carlist = snapshot.val();
     console.log(carlist);
      let currenti = 0;
      for (let key in carlist) {
        if (currenti == index) {
          console.log(`Cars/${key}`);
          this.db.object(`Cars/${key}`).remove();
          break;
        }
        currenti++;
      }
   },  (error) => console.log('Error: ' + error.code));
  }


    logoutgoogle() {
      console.log('logout');
     this.af.auth.signOut()
     .then((result) => {
       this.router.navigate(['/login']).then(function() {
         this.authenticated = false;
       });
       console.log('You were logged out successfully!');
     }).catch((error) => {
       this.authenticated = true;
       console.log('Error signing out: ', error);
     });
   }

   Createnewcar() {
     this.router.navigate(['/addcars']);
   }

  ngOnInit() {
  }
}


