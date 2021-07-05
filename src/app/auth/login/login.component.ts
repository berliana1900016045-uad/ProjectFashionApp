import { User } from './../../api/otentikasi/auth.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/api/otentikasi/auth.service';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide: boolean = true;
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  user: any = {};
  userData: any = {};

  constructor(
    public authService: AuthService,
    public auth: AngularFireAuth,
    public db: AngularFirestore,
    public router: Router,
    public snack: MatSnackBar
  ) {}

  ngOnInit() {}

  SignIn() {
    return this.auth
      .signInWithEmailAndPassword(this.user.email, this.user.password)
      .then((result) => {
        this.router.navigate(['covercorausel']);
      })
      .catch((error) => {
        this.snack.open(
          'Maaf Anda Gagal Untuk Melakukan LOGIN, Silahkan Coba Lagi!!!',
          'close',
          {
            verticalPosition: this.verticalPosition,
            horizontalPosition: this.horizontalPosition,
          }
        );
        console.log(error);
      });
  }
}
