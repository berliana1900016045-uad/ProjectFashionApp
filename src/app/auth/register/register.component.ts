import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/api/otentikasi/auth.service';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  user: any = {};
  userData: any = {};
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';

  constructor(
    // public authService: AuthService,
    public auth: AngularFireAuth,
    public db: AngularFirestore,
    public router: Router,
    public snack: MatSnackBar
  ) {}

  hide: boolean = true;

  ngOnInit() {
    this.auth.authState.subscribe((user) => {
      this.userData = user;
    });
  }

  //Fungsi Loading
  loading!: boolean;

  //Membuat fungsi Register (SignUp):
  SignUp() {
    return this.auth
      .createUserWithEmailAndPassword(this.user.email, this.user.password)
      .then((rest) => {
        this.SetUserData(rest.user);
        this.snack.open('Selamat... Anda Berhasil Membuat Account', ' close', {
          verticalPosition: this.verticalPosition,
          horizontalPosition: this.horizontalPosition,
        });
        this.router.navigate(['login']);
      })
      .catch((err) => {
        this.snack.open(
          'Maaf... Pendaftaran Anda DiTolak. Silahkan Coba Lagi!',
          'close',
          {
            verticalPosition: this.verticalPosition,
            horizontalPosition: this.horizontalPosition,
          }
        );
        console.log(err);
      });
  }

  SetUserData(user: any) {
    this.db
      .collection('users')
      .add({
        email: this.user.email,
        username: this.user.username,
        password: this.user.password,
      })
      .then((res) => {
        console.log('data berhasil ditambahkan');
      })
      .catch((err) => {
        console.log('data tidak dapat ditambahkan');
        console.log(err);
      });
  }
}
