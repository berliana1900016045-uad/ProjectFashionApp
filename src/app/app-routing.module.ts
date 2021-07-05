import { ForgetComponent } from './auth/forget/forget.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoverComponent } from './auth/cover/cover.component';
import { CovercorauselComponent } from './auth/covercorausel/covercorausel.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  {
    path: 'cover',
    component: CoverComponent,
  },

  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'register',
    component: RegisterComponent,
  },

  {
    path: 'forget',
    component: ForgetComponent,
  },

  {
    path: 'fashionapp',
    loadChildren: () =>
      import('./fashionapp/fashionapp.module').then(
        (mod) => mod.FashionappModule
      ),
  },

  {
    path: 'covercorausel',
    component: CovercorauselComponent,
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/cover',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
