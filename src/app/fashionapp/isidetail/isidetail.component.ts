import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, Inject, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface Item {
  IdProduk: string;
  NamaProduk: string;
  KodeProduk: string;
  Merek: string;
  Size: string;
  Warna: string;
  Bahan: string;
  AsalProduk: string;
  DikirimDari: string;
  DeskripsiProduk: string;
  HargaProduk: string;
}

@Component({
  selector: 'app-isidetail',
  templateUrl: './isidetail.component.html',
  styleUrls: ['./isidetail.component.scss'],
})
export class IsidetailComponent implements OnInit {
  userData: any = {};
  user: any = {};

  constructor(
    public dialogRef: MatDialogRef<IsidetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public afs: AngularFirestore,
    public auth: AngularFireAuth,
    public snackbar: MatSnackBar
  ) {}

  ngOnInit() {
    this.auth.user.subscribe((res) => {
      this.userData = res;
    });
  }
}
