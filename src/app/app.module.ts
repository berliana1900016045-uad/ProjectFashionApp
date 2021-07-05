import { AuthService } from 'src/app/api/otentikasi/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesign } from './Material/material';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CoverComponent } from './auth/cover/cover.component';
import { CovercorauselComponent } from './auth/covercorausel/covercorausel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BoostrapMaterial } from './Material/Boostrap';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Import FireBase Untuk Kebutuhan Otentikasi:
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ForgetComponent } from './auth/forget/forget.component';

@NgModule({
  declarations: [
    AppComponent,
    CoverComponent,
    LoginComponent,
    RegisterComponent,
    CovercorauselComponent,
    ForgetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesign,
    FormsModule,
    NgbModule,
    BoostrapMaterial,
    MDBBootstrapModule.forRoot(),
    MDBBootstrapModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyBa3d5PQ24zzAZOULQmDiPyhUDkrm2swC4',
      authDomain: 'fashion-app-ac89c.firebaseapp.com',
      projectId: 'fashion-app-ac89c',
      storageBucket: 'fashion-app-ac89c.appspot.com',
      messagingSenderId: '991175704290',
      appId: '1:991175704290:web:72de669663834dc6dfa8bb',
    }),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
