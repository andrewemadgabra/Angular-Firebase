import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddcarsComponent } from './addcars/addcars.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { firebases } from '../environments/firebases';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { CardetailsComponent } from './cardetails/cardetails.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddcarsComponent,
    HomepageComponent,
    CardetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    MatButtonModule,
    HttpModule,
    MatTableModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    AngularFireModule.initializeApp(firebases),
    RouterModule.forRoot([
      {path : 'login' , component: LoginComponent },
      {path : 'homepage' , component: HomepageComponent },
      {path : 'addcars' , component: AddcarsComponent },
      {path : 'cardetails' , component: CardetailsComponent },
      { path: '**', component: LoginComponent }, 

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
