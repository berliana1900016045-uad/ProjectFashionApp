import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
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
  selector: 'app-produkdetails',
  templateUrl: './produkdetails.component.html',
  styleUrls: ['./produkdetails.component.scss'],
})
export class ProdukdetailsComponent implements OnInit {
  userData: any = {};
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';

  user: any = {};

  constructor(
    public dialogRef: MatDialogRef<ProdukdetailsComponent>,
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

  simpan() {
    if (this.data.id == undefined) {
      // fungsi untuk menyimpan data
      const doc = new Date().getTime().toString();
      this.data.uid = this.userData.uid;

      this.afs
        .collection('items')
        .doc(doc)
        .set(this.data)
        .then((res) => {
          this.snackbar.open('Selamat data anda berhasil disimpan!', 'ok', {
            verticalPosition: this.verticalPosition,
            horizontalPosition: this.horizontalPosition,
          });
          this.dialogRef.close();
        })
        .catch((err) => {
          this.snackbar.open('Data tidak berhasil disimpan', 'ok', {
            verticalPosition: this.verticalPosition,
            horizontalPosition: this.horizontalPosition,
          });
          console.log(err);
        });
    } else {
      // fungsi untuk menyimpan data
      const doc = new Date().getTime().toString();
      this.data.uid = this.userData.uid;

      this.afs
        .collection('items')
        .doc(this.data.id)
        .update(this.data)
        .then((res) => {
          this.snackbar.open('Selamat data anda berhasil diupdate!', 'ok', {
            verticalPosition: this.verticalPosition,
            horizontalPosition: this.horizontalPosition,
          });
          this.dialogRef.close();
        })
        .catch((err) => {
          console.log(err);
          this.snackbar.open('Maaf anda tidak dapat menyimpan data', 'ok', {
            verticalPosition: this.verticalPosition,
            horizontalPosition: this.horizontalPosition,
          });
        });
    }
  }
}
