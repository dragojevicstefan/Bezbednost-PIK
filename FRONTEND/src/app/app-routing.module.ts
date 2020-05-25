import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { AdminHomePageComponent } from './components/admin-home-page/admin-home-page.component';
import {AddCertificateComponent} from './components/add-certificate/add-certificate.component';
import {AddSelfsignedComponent} from './components/add-selfsigned/add-selfsigned.component';
import {AllCertificatesComponent} from './components/all-certificates/all-certificates.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponentComponent,
      },
      {
        path: 'admin/home',
        component: AdminHomePageComponent
      },
  {
      path: 'admin/add-certificate',
    component: AddCertificateComponent
  },
  {
    path: 'admin/add-selfsigned',
    component: AddSelfsignedComponent
  },
  {
    path: 'admin/all-certificates',
    component: AllCertificatesComponent
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
