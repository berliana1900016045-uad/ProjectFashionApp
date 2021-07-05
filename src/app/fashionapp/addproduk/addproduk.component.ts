import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DeleteprodukComponent } from '../deleteproduk/deleteproduk.component';
import { IsidetailComponent } from '../isidetail/isidetail.component';
import { ProdukdetailsComponent } from '../produkdetails/produkdetails.component';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-addproduk',
  templateUrl: './addproduk.component.html',
  styleUrls: ['./addproduk.component.scss'],
})
export class AddprodukComponent implements OnInit {
  title: any;
  item: any = {};
  items: any = [];
  userData: any = {};
  user: any = {};
  idx: any;
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';

  constructor(
    public dialog: MatDialog,
    public auth: AngularFireAuth,
    public db: AngularFirestore,
    public sb: MatSnackBar
  ) {}

  ngOnInit() {
    this.auth.user.subscribe((user) => {
      this.userData = user;
      this.getItem();
    });
  }

  getItem() {
    this.db
      .collection('items', (ref) => {
        return ref.where('uid', '==', this.userData.uid);
      })
      .valueChanges({ idField: 'id' })
      .subscribe(
        (res) => {
          console.log(res);
          this.items = res;
        },
        (err) => {
          console.log(err);
        }
      );
  }

  buatItem(data: any, idx: any) {
    let dialog = this.dialog.open(ProdukdetailsComponent, {
      width: '450px',
      data: data,
    });

    dialog.afterClosed().subscribe((res) => {
      if (res) {
        //jika idx=-1 (penambahan data baru) maka tambahkan data
        if (idx == -1) this.items.push(res);
        //jika tidak maka perbarui data
        else this.items[idx] = data;
      }
    });
  }

  detailItem(data: any, idx: any) {
    let dialog = this.dialog.open(IsidetailComponent, {
      width: '450px',
      data: data,
    });

    dialog.afterClosed().subscribe((res) => {
      console.log('card ditutup');
    });
  }

  //Membuat Fungsi  Delete Produk:
  deleteItem(items: any, idx: any) {
    const dialogRef = this.dialog.open(DeleteprodukComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result == true) {
        this.db
          .collection('items')
          .doc(items.id)
          .delete()
          .then((res) => {
            this.sb.open('Data berhasil dihapus', 'ok', {
              verticalPosition: this.verticalPosition,
              horizontalPosition: this.horizontalPosition,
            });
          })
          .catch((err) => {
            this.sb.open('Silahkan coba lagi, Data tidak dapat dihapus', 'ok', {
              verticalPosition: this.verticalPosition,
              horizontalPosition: this.horizontalPosition,
            });
          });
      }
    });
  }

  //Membuat fungsi loading:
  loading!: boolean;

  //Membuat Fungsi Buat Produk
  // buatProduk(data: any, idx: any) {
  //   let dialog = this.dialog.open(ProdukdetailsComponent, {
  //     width: '450px',
  //     data: data,
  //   });

  //   dialog.afterClosed().subscribe((res) => {
  //     if (res) {
  //       //jika idx=-1 (penambahan data baru) maka tambahkan data
  //       if (idx == -1) this.fashionapps.push(res);
  //       //jika tidak maka perbarui data
  //       else this.fashionapps[idx] = data;
  //     }
  //   });
  // }

  //Membuat Fungsi Isi  Detail Produk:
  // isidetailProduk() {
  //   const dialogRef = this.dialog.open(IsidetailComponent, {
  //     width: '450px',
  //   });
  //   dialogRef.afterClosed().subscribe((result) => {
  //     console.log('Dialog ditutup');
  //   });
  // }
}
