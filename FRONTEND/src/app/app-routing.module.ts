import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { AdminHomePageComponent } from './components/admin-home-page/admin-home-page.component';
import {AddCertificateComponent} from './components/add-certificate/add-certificate.component';
import {AddSelfsignedComponent} from './components/add-selfsigned/add-selfsigned.component';
import {AllCertificatesComponent} from './components/all-certificates/all-certificates.component';
import {ClientHomePageComponent} from './components/client-home-page/client-home-page.component';
import {ClientAllCertificatesComponent} from "./components/client-all-certificates/client-all-certificates.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {LogInfoListComponent} from "./components/log-info-list/log-info-list.component";
import {RegistrationAdminComponent} from "./components/registration-admin/registration-admin.component";

const routes: Routes = [
    {
        path: 'login',
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
  },
  {
    path: 'client/home',
    component: ClientHomePageComponent
  },
  {
    path: 'client/all-certificates',
    component: ClientAllCertificatesComponent
  }
  ,
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path:'admin/logs',
    component: LogInfoListComponent
  },
  {
    path: 'registrationAdmin',
    component: RegistrationAdminComponent
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
