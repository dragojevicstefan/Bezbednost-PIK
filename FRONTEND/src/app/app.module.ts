import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }         from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-module';
import { AppRoutingModule } from './app-routing.module';
import { AdminHomePageComponent } from './components/admin-home-page/admin-home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { AddCertificateComponent } from './components/add-certificate/add-certificate.component';
import { AddSelfsignedComponent } from './components/add-selfsigned/add-selfsigned.component';
import { AllCertificatesComponent } from './components/all-certificates/all-certificates.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    AdminHomePageComponent,
    AddCertificateComponent,
    AddSelfsignedComponent,
    AllCertificatesComponent,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
