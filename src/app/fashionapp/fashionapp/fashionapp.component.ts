import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/api/otentikasi/auth.service';

@Component({
  selector: 'app-fashionapp',
  templateUrl: './fashionapp.component.html',
  styleUrls: ['./fashionapp.component.scss'],
})
export class FashionappComponent implements OnInit {
  constructor(public router: Router, public authService: AuthService,
                  public afAuth: AngularFireAuth, public router: Router,) {}

  ngOnInit(): void {}

  mode: string = 'side';

  //LogOut
 logout()
 {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['cover']);
    });
 }


  //menu:
  menu = [
    {
      name: 'Database Product',
      icon: 'note_add',
      url: '/fashionapp/addproduk',
    },
    {
      group: 'Enrolled',
      children: [
        {
          name: 'Edit Image',
          icon: 'camera_enchance',
          url: '/fashionapp/dashboard',
        },
        {
          name: 'Produk',
          icon: 'laptop_chromebook',
          url: '/fashionapp/dashboard',
        },
      ],
    },
  ];
}
