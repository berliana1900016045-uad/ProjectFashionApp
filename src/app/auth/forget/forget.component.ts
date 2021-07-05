import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss'],
})
export class ForgetComponent implements OnInit {
  user: any = {};
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';

  hide: boolean = true;

  constructor(public auth: AngularFireAuth, public snack: MatSnackBar) {}

  ngOnInit() {}

  forgetPassword() {
    this.auth
      .sendPasswordResetEmail(this.user.email)
      .then((res) => {
        this.snack.open('Silahkan cek email anda', 'close', {
          verticalPosition: this.verticalPosition,
          horizontalPosition: this.horizontalPosition,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
