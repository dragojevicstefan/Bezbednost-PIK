import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }         from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-module';
import { AppRoutingModule } from './app-routing.module';
import { AdminHomePageComponent } from './components/admin-home-page/admin-home-page.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AddCertificateComponent } from './components/add-certificate/add-certificate.component';
import { AddSelfsignedComponent } from './components/add-selfsigned/add-selfsigned.component';
import { AllCertificatesComponent } from './components/all-certificates/all-certificates.component';
import { ClientHomePageComponent } from './components/client-home-page/client-home-page.component';
import { ClientAllCertificatesComponent } from './components/client-all-certificates/client-all-certificates.component';
import { RegistrationComponent } from './components/registration/registration.component';
import {AuthService} from "./services/auth.service";
import {CertificateServiceService} from "./services/certificate-service.service";
import {JwtInterceptor} from "./_helper/jwt.interceptor";
import { LogInfoListComponent } from './components/log-info-list/log-info-list.component';
import { RegistrationAdminComponent } from './components/registration-admin/registration-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    AdminHomePageComponent,
    AddCertificateComponent,
    AddSelfsignedComponent,
    AllCertificatesComponent,
    ClientHomePageComponent,
    ClientAllCertificatesComponent,
    RegistrationComponent,
    LogInfoListComponent,
    RegistrationAdminComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    DemoMaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    CertificateServiceService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
