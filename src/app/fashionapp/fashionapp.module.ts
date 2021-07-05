import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FashionappComponent } from './fashionapp/fashionapp.component';
import { ProdukdetailsComponent } from './produkdetails/produkdetails.component';
import { AddprodukComponent } from './addproduk/addproduk.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialDesign } from '../Material/material';
import { RouterModule, Routes } from '@angular/router';
import { IsidetailComponent } from './isidetail/isidetail.component';
import { DeleteprodukComponent } from './deleteproduk/deleteproduk.component';

const routes: Routes = [
  {
    path: '',
    component: FashionappComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },

      {
        path: 'addproduk',
        component: AddprodukComponent,
      },

      {
        path: 'produkdetails',
        component: ProdukdetailsComponent,
      },

      {
        path: 'isidetail',
        component: IsidetailComponent,
      },

      {
        path: 'deleteproduk',
        component: DeleteprodukComponent,
      },

      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/fashionapps/addproduk',
      },
    ],
  },
];

@NgModule({
  declarations: [
    AddprodukComponent,
    FashionappComponent,
    ProdukdetailsComponent,
    DashboardComponent,
    IsidetailComponent,
    DeleteprodukComponent,
  ],

  entryComponents: [
    AddprodukComponent,
    ProdukdetailsComponent,
    DashboardComponent,
    IsidetailComponent,
    DeleteprodukComponent,
  ],

  imports: [
    CommonModule,
    MaterialDesign,
    RouterModule.forChild(routes),
    FormsModule,
  ],
})
export class FashionappModule {}
