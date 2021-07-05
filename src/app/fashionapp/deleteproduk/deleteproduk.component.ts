import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-deleteproduk',
  templateUrl: './deleteproduk.component.html',
  styleUrls: ['./deleteproduk.component.scss'],
})
export class DeleteprodukComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DeleteprodukComponent>) {}

  ngOnInit(): void {}

  //Membuat Fungsi Konfirmasi Delete Produk:
  konfirmasiDelete() {
    this.dialogRef.close(true);
  }
}
