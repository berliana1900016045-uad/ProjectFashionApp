import { Injectable } from '@angular/core';
import { NgZone } from '@angular/core';

//Import Untuk Otentikasi:

import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { HttpHeaders } from '@angular/common/http';

//Import Router:
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface User {
  uid: string;
  email: string;
  username: string;
  id: string;
  emailVerified: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any;
  user: any;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
    public snack: MatSnackBar
  ) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        localStorage.getItem('user');
      } else {
        localStorage.getItem('user');
      }
    });
  }

  //Membuat fungsi LogIn (SignIn):
  SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        localStorage.setItem('appToken', JSON.stringify(result));
        this.ngZone.run(() => {
          this.router.navigate(['covercorausel']);
        });
        this.SetUserData(result.user);
      })
      .catch((_error) => {
        window.alert(
          'Maaf Anda Gagal Untuk Melakukan LOGIN, Silahkan Coba Lagi!!!'
        );
      });
  }

  //Membuat fungsi Get Untuk LogIn (SignIn):
  get isLoggedIn(): boolean {
    const user = localStorage.getItem('user');
    return user !== null ? true : false;
  }

  //Membuat fungsi ForgetPassword:
  ForgotPassword(passwordResetEmail: string) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password Email Berhasil DiReset, Silahkan Cek Inbox Mu.');
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  //Membuat fungsi Otentikasi Ketika Melakukan LogIn:
  AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['covercorausel']);
        });
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  //Membuat fungsi Register (SignUp):
  SignUp() {
    return this.afAuth
      .createUserWithEmailAndPassword(this.user.email, this.user.password)
      .then((rest) => {
        this.SetUserData(rest.user);
        this.snack.open('Selamat... Anda Berhasil Membuat Account', ' close');
        this.router.navigate(['login']);
      })
      .catch((err) => {
        this.snack.open(
          'Maaf... Pendaftaran Anda DiTolak. Silahkan Coba Lagi!',
          'close'
        );
        console.log(err);
      });
  }

  //Membuat fungsi Untuk Mendapatkan Data User:
  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs
      .collection('users/')
      .doc(this.user.uid);
    return userRef.set({
      password: this.user.password,
      email: this.user.email,
      username: this.user.username,
      emailVerified: this.user.emailVerified,
    });
  }

  //Membuat fungsi Untuk LogOut (SignOut):
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['cover']);
    });
  }

  //Token
  // httpOptions: any;
  // getToken() {
  //   var tokenKey = localStorage.getItem('appToken');
  //   if (tokenKey != null) {
  //     var tkn = JSON.parse(tokenKey);
  //     this.httpOptions = {
  //       headers: new HttpHeaders({
  //         'Content-Type': 'application/json',
  //         Authorization: 'Bearer ' + tkn.token,
  //       }),
  //     };
  //   }
  // }
}
